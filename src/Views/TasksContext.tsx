import React, {ReactNode, createContext, useState} from 'react';
import {TaskType} from '../Model/Task/TaskType';
import {TaskStatus, toggleStatus} from '../Model/Task/TaskStatusEnum';
import {v4 as uuidv4} from 'uuid';

type TodoListType = Array<TaskType>;

type TasksContextType = {
  tasks: TodoListType;
  addTask: (title: string, description: string, category: string) => void;
  toggleTaskStatus: (id: string) => void;
  removeTask: (id: string) => void;
  editTask: (
    id: string,
    title: string,
    description: string,
    category: string,
  ) => void;
};

export const TasksContext = createContext<TasksContextType>({
  tasks: [],
  addTask: () => {},
  toggleTaskStatus: () => {},
  removeTask: () => {},
  editTask: () => {},
});

const TasksContextProvider = ({children}: {children: ReactNode}) => {
  const [tasks, setTasks] = useState<TodoListType>([
    {
      id: uuidv4(),
      title: 'Teste',
      description: 'Description',
      category: 'Test',
      status: TaskStatus.Todo,
    },
  ]);

  const addTask = (title: string, description: string, category: string) => {
    setTasks([
      ...tasks,
      {id: uuidv4(), title, description, category, status: TaskStatus.Todo},
    ]);
  };

  const toggleTaskStatus = (id: string) => {
    setTasks(
      tasks.map(task =>
        task.id == id ? {...task, status: toggleStatus(task.status)} : task,
      ),
    );
  };

  const removeTask = (id: string) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const editTask = (
    id: string,
    title: string,
    description: string,
    category: string,
  ) => {
    setTasks(
      tasks.map(task =>
        task.id == id
          ? {id, title, description, category, status: task.status}
          : task,
      ),
    );
  };

  return (
    <TasksContext.Provider
      value={{tasks, addTask, toggleTaskStatus, removeTask, editTask}}>
      {children}
    </TasksContext.Provider>
  );
};

export default TasksContextProvider;
