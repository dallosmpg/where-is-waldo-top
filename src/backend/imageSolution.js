import {
  getFirestore,
  doc,
  getDoc,
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