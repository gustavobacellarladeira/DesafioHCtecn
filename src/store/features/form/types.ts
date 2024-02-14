export enum Status {
  NOT_COMPLETE = 0,
  COMPLETE = 1,
}

export type Task = {
  name: string;
  description: string;
  category: string;
};

export type State = {
  task: Task;
};
