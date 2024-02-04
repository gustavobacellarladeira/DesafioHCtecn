export enum TaskStatus {
  Todo,
  Done,
}

export const TaskStatusChars = {
  [TaskStatus.Todo]: '⬜️',
  [TaskStatus.Done]: '✅',
};

export const toggleStatus = (status: TaskStatus) => {
  return status == TaskStatus.Done ? TaskStatus.Todo : TaskStatus.Done;
};
