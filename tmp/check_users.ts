
import { db } from "./src/backend/firebase";
import { collection, getDocs } from "firebase/firestore";

async function checkUsers() {
  try {
    console.log("Checking 'users' collection...");
    const querySnapshot = await getDocs(collection(db, "users"));
    if (querySnapshot.empty) {
      console.log("No 'users' collection found or it's empty.");
    } else {
      console.log("Found 'users' collection:");
      querySnapshot.forEach((doc) => {
        console.log(`${doc.id} =>`, doc.data());
      });
    }
  } catch (error) {
    console.error("Error checking users:", error);
  }
}

checkUsers();
