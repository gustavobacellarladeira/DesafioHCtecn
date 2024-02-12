import firestore from '@react-native-firebase/firestore';
import {Status, Task} from './types';
import {getDate} from 'src/utils';

const createTask = async (task: Task) => {
  try {
    await firestore()
      .collection('Tasks')
      .add({...task, status: Status.NOT_COMPLETE, date: getDate()});
  } catch (error) {
    console.log(error);
  }
};

export default createTask;
