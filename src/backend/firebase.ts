import { initializeApp, getApps, getApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { 
  getAuth, 
  signInWithEmailAndPassword, 
  signOut, 
  onAuthStateChanged,
  User
} from "firebase/auth";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  serverTimestamp,
  query,
  orderBy,
  deleteDoc,
  updateDoc,
  doc,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_DB_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_DB_AUTH_KEY,
  projectId: process.env.NEXT_PUBLIC_DB_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_DB_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_DB_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_DB_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_DB_MEASUREMENT_ID,
};

// Handle initialization for Next.js SSR/Client
const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);

// Validate config to provide clearer errors
if (!firebaseConfig.projectId && typeof window !== "undefined") {
  console.error(
    "Firebase error: NEXT_PUBLIC_DB_PROJECT_ID is missing from environment variables.",
  );
}

export const analytics =
  typeof window !== "undefined" && firebaseConfig.measurementId
    ? getAnalytics(app)
    : null;
export const db = getFirestore(app);
export const auth = getAuth(app);

export { signInWithEmailAndPassword, signOut, onAuthStateChanged };
export type { User };

// Ma'lumot qo'shish funksiyasi (Add data)
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
    const q = query(
      collection(db, collectionName),
      orderBy("createdAt", "desc"),
    );
    const querySnapshot = await getDocs(q);
    const documents = querySnapshot.docs.map((doc) => ({
      docId: doc.id,
      ...doc.data(),
    }));
    return documents;
  } catch (error) {
    console.error("Error getting documents: ", error);
    return [];
  }
};

// Ma'lumotni o'chirish funksiyasi (Delete data)
export const deleteDocument = async (collectionName: string, id: string) => {
  if (!id) {
    console.error("Error: ID is required for deleteDocument");
    return { success: false, error: "ID is required" };
  }
  try {
    await deleteDoc(doc(db, collectionName, id));
    return { success: true };
  } catch (error: any) {
    console.error("Error deleting document: ", error);
    return { success: false, error: error.message };
  }
};

// Ma'lumotni yangilash funksiyasi (Update data)
export const updateDocument = async (
  collectionName: string,
  id: string,
  data: any,
) => {
  if (!id) {
    console.error("Error: ID is required for updateDocument");
    return { success: false, error: "ID is required" };
  }
  try {
    await updateDoc(doc(db, collectionName, id), {
      ...data,
      updatedAt: serverTimestamp(),
    });
    return { success: true };
  } catch (error: any) {
    console.error("Error updating document: ", error);
    return { success: false, error: error.message };
  }
};
