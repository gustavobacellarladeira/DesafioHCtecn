import firestore from '@react-native-firebase/firestore';
import {Task} from './types';

const updateTask = async (id: string, task: Task) => {
  try {
    await firestore().collection('Tasks').doc(id).update(task);
  } catch (error) {
    console.log(error);
  }
};

export default updateTask;
