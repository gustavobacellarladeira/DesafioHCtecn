enum Status {
  NOT_COMPLETE = 0,
  COMPLETE = 1,
}

export type Task = {
  id: string;
  name: string;
  description: string;
  category: string;
  status: Status;
  date: Date;
};

export type State = {
  tasks: Task[];
  refresh: boolean;
};
