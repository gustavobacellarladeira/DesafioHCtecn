export enum TaskStatus {
  Todo,
  Ongoing,
  Done,
}

export const TaskStatusChars = {
  [TaskStatus.Todo]: '⬜️',
  [TaskStatus.Ongoing]: '⏳',
  [TaskStatus.Done]: '✅',
};
