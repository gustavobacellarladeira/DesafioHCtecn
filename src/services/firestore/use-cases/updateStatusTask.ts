import firestore from '@react-native-firebase/firestore';
import {Status} from './types';

const updateStatusTask = async (id: string) => {
  try {
    const task = await firestore().collection('Tasks').doc(id).get();
    const data = task.data();
    const newStatus =
      data?.status === Status.COMPLETE ? Status.NOT_COMPLETE : Status.COMPLETE;
    await firestore().collection('Tasks').doc(id).update({status: newStatus});
  } catch (error) {
    console.log(error);
  }
};

export default updateStatusTask;
