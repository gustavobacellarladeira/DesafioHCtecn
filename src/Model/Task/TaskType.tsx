import {TaskStatus} from './TaskStatusEnum';

export type TaskType = {
  id: string;
  title: string;
  description: string;
  category: string;
  status: TaskStatus;
};
