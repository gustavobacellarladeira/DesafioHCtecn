import firestore from '@react-native-firebase/firestore';

const getTasksCompleted = async () => {
  try {
    const tasks = await firestore()
      .collection('Tasks')
      .where('status', '==', 1)
      .get();
    return tasks.docs
      .map(task => {
        return {...task.data(), id: task.id};
      })
      .sort((a, b) => a.name.localeCompare(b.name));
  } catch (error) {
    console.log(error);
  }
};

export default getTasksCompleted;
