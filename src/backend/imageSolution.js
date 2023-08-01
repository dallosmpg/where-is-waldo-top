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


export default async function queryImageSolutions(imageName, characterName) {
  const collectionName = 'imagesSolutions'
  try {
    const firestore = getFirestore();
    const imageDocRef = doc(firestore, collectionName, imageName);
    const imageDocSnap = await getDoc(imageDocRef);

    if (imageDocSnap.exists()) {
      const imageSolution = imageDocSnap.data();

      if (imageSolution && imageSolution[characterName]) {
        const characterSolution = imageSolution[characterName];
        console.log('Character Solution for', characterName, 'in', imageName, ':', characterSolution);
        return characterSolution;
      } else {
        console.log('Character not found in the specified image.');
      }
    } else {
      console.log('Image not found in Firestore.');
    }
  } catch (error) {
    console.error('Error querying image solution:', error);
  }
}

 export async function uploadImageSolutions(imageSolutions) {
  const collectionName = 'imagesSolutions'
  try {
    const firestore = getFirestore();

    // Loop through each image (e.g., waldoSnow, waldoBeach) in the imageSolutions object
    for (const imageName in imageSolutions) {
      if (imageSolutions.hasOwnProperty(imageName)) {
        const imageSolution = imageSolutions[imageName];

        // Create a new document in the Firestore collection for each image
        const imageDocRef = doc(firestore, collectionName, imageName);

        // Set the imageSolutions data to the document
        await setDoc(imageDocRef, imageSolution);
      }
    }

    console.log('Image solutions successfully pushed to Firestore!');
  } catch (error) {
    console.error('Error pushing image solutions to Firestore:', error);
  }
}
  
