import firestore from '@react-native-firebase/firestore';

const loadTask = async (id: string) => {
  try {
    const task = await firestore().collection('Tasks').doc(id).get();
    return task.data();
  } catch (error) {
    console.log(error);
  }
};

export default loadTask;
