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