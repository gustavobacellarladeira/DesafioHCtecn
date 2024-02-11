export enum Status {
  NOT_COMPLETE = 0,
  COMPLETE = 1,
}

export enum ActionCompleted {
  INSERTED = 0,
  DELETED = 1,
  UPDATED = 2,
}

export type Task = {
  name: string;
  description: string;
  category: string;
};

export type State = {
  task: Task;
  actionCompleted: ActionCompleted | null;
};
