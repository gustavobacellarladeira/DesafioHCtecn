import firestore from '@react-native-firebase/firestore';

const getTasks = async () => {
  try {
    const tasks = await firestore().collection('Tasks').get();
    return tasks.docs.map(task => task.data());
  } catch (error) {
    console.log(error);
  }
};

export default getTasks;
