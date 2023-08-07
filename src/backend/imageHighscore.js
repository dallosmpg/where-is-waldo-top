import { initializeApp } from 'firebase/app';
import {
  getFirestore,
  collection,
  doc,
  getDoc,
  setDoc
} from 'firebase/firestore';
import { firebaseConfig } from './firebase';

export default async function queryImageHighscore(imageName) {
  try {
    const db = getFirestore();
    const imageDocRef = doc(collection(db, 'imageHighscores'), imageName);
    const imageSnapshot = await getDoc(imageDocRef);

    if (imageSnapshot.exists()) {
      const highscoreObj = imageSnapshot.data()
      return highscoreObj.highscores;
    } else {
      console.log(`No image solution found for image: ${imageName}`);
      return null;
    }
  } catch (error) {
      console.error('Error querying Firestore:', error);
      return null;
  }
}

// TODO Finish this function
// export async function addHighscoreToImageHighscore(imageName, highscoreObj) {
//   initializeApp(firebaseConfig)
//   try {
//     const db = getFirestore();
//     const imageDocRef = doc(collection(db, 'imageHighscores'), imageName);

//     // Merge the new highscore object with any existing data in the document
//     const currentData = await getDoc(imageDocRef);
//     console.log(currentData.data());
//     // const newData = [...currentData.data(), highscoreObj]
//     // { ...currentData.data(), highscores: { ...highscoreObj } };

//     await setDoc(imageDocRef, {highscores: [{name: 'Martin', score: 25}, {name: 'John', score: 45}]});
//     console.log(`Highscore added to image: ${imageName}`);
//     return true;
//   } catch (error) {
//     console.error('Error adding highscore to Firestore:', error);
//     return false;
//   }
// }

export async function addHighscoreToImageHighscore(imageName, highscoreObj) {
  initializeApp(firebaseConfig);
  console.log({imageName, highscoreObj});
  try {
    const db = getFirestore();
    const imageDocRef = doc(collection(db, 'imageHighscores'), imageName);

    // Merge the new highscore object with any existing data in the document
    const currentData = await getDoc(imageDocRef);
    console.log(currentData.data().highscores);

    await setDoc(imageDocRef, {highscores: [...currentData.data().highscores, highscoreObj]});
    console.log(`Highscore added to image: ${imageName}`);
    return true;
  } catch (error) {
    console.error('Error adding highscore to Firestore:', error);
    return false;
  }
}