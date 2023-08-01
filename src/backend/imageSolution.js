import { initializeApp } from "firebase/app";
import { firebaseConfig } from './firebase';
import {
  getFirestore,
  collection,
  doc,
  getDoc,
  setDoc,
  query,
  getDocs,
  where
} from 'firebase/firestore';


export default async function queryImageSolutions(imageName, charName) {
  const firestore = getFirestore();
  const imageSolutionsRef = collection(firestore, 'imageSolutions');

  try {
    // Query the subcollection based on the image name
    const querySnapshot = await getDocs(
      query(imageSolutionsRef, where('name', '==', imageName))
    );

    // Check if the query has any results
    if (!querySnapshot.empty) {
      // Loop through the documents (locations) that match the image name
      for (const docSnapshot of querySnapshot.docs) {
        const locationRef = docSnapshot.ref;

        // Get the specific character document based on the character name
        const characterSnapshot = await getDoc(
          doc(collection(locationRef, 'solutions'), charName)
        );

        if (characterSnapshot.exists()) {
          return characterSnapshot.data();
        }
      }
    }

    console.log('Character solution not found.');
    return null;
  } catch (error) {
    console.error('Error getting character solution:', error);
    return null;
  }  }

 export async function uploadImageSolutions(imageSolutions) {
  const firestore = getFirestore();

  try {
    // Loop through each location (e.g., waldoSnow, waldoBeach)
    for (const locationKey in imageSolutions) {
      const locationRef = doc(firestore, 'imageSolutions', locationKey);

      // Loop through each character (e.g., Waldo, Odlaw, Wizard) within the location
      for (const characterKey in imageSolutions[locationKey]) {
        const characterData = imageSolutions[locationKey][characterKey];

        // Add the character data to Firestore
        await setDoc(doc(locationRef,  characterKey), characterData);
      }
    }

    console.log('Data uploaded successfully.');
  } catch (error) {
    console.error('Error uploading data:', error);
  }  }
  
