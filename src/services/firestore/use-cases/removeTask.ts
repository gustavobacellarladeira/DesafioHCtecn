import firestore from '@react-native-firebase/firestore';

const removeTask = async (id: string) => {
  try {
    await firestore().collection('Tasks').doc(id).delete();
  } catch (error) {
    console.log(error);
  }
};

export default removeTask;
