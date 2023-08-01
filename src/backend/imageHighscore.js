import { initializeApp } from "firebase/app";
import { firebaseConfig } from './firebase';
import {
  getFirestore,
  collection,
  doc,
  getDoc,
  setDoc
} from 'firebase/firestore';

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

// const uploadImageHighscoresToFirestore = async (data) => {
//   try {
//     const db = getFirestore();

//     for (const imageName in data) {
//       const imageHighscores = data[imageName];
//       const imageDocRef = doc(collection(db, 'imageHighscores'), imageName);
//       await setDoc(imageDocRef, { highscores: imageHighscores });
//     }

//     console.log('Image highscores uploaded successfully!');
//   } catch (error) {
//     console.error('Error uploading image highscores to Firestore:', error);
//   }
// };