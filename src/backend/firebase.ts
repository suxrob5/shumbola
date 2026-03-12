import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { 
  getFirestore, 
  collection, 
  addDoc, 
  getDocs, 
  serverTimestamp, 
  query, 
  orderBy 
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.DB_API_KEY,
  authDomain: process.env.DB_AUTH_KEY,
  projectId: process.env.DB_PROJECT_ID,
  storageBucket: process.env.DB_STORAGE_BUCKET,
  messagingSenderId: process.env.DB_MESSAGING_SENDER_ID,
  appId: process.env.DB_APP_ID,
  measurementId: process.env.DB_MEASUREMENT_ID
};

const app = initializeApp(firebaseConfig);
export const analytics = typeof window !== "undefined" ? getAnalytics(app) : null;
export const db = getFirestore(app);

export const addDocument = async (collectionName: string, data: any) => {
  try {
    const docRef = await addDoc(collection(db, collectionName), {
      ...data,
      createdAt: serverTimestamp(),
    });
    return { success: true, id: docRef.id };
  } catch (error) {
    console.error("Error adding document: ", error);
    return { success: false, error };
  }
};

// Ma'lumotlarni olish funksiyasi (Get data)
    export const getDocuments = async (collectionName: string) => {
    try {
        const q = query(collection(db, collectionName), orderBy("createdAt", "desc"));
        const querySnapshot = await getDocs(q);
        const documents = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
        }));
        return documents;
    } catch (error) {
        console.error("Error getting documents: ", error);
        return [];
    }
    };
