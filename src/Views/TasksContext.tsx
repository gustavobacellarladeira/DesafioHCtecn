import React, {ReactNode, createContext, useEffect, useState} from 'react';
import {TaskType} from '../Model/Task/TaskType';
import {TaskStatus, toggleStatus} from '../Model/Task/TaskStatusEnum';
import {v4 as uuidv4} from 'uuid';

type TodoListType = Array<TaskType>;

type TasksContextType = {
  tasks: TodoListType;
  statusFilter: Array<TaskStatus>;
  addTask: (title: string, description: string, category: string) => void;
  toggleTaskStatus: (id: string) => void;
  removeTask: (id: string) => void;
  editTask: (
    id: string,
    title: string,
    description: string,
    category: string,
  ) => void;
  toggleStatusFilter: (status: TaskStatus) => void;
  filteredTasks?: TodoListType;
};

export const TasksContext = createContext<TasksContextType>({
  tasks: [],
  statusFilter: [TaskStatus.Done, TaskStatus.Todo],
  addTask: () => {},
  toggleTaskStatus: () => {},
  removeTask: () => {},
  editTask: () => {},
  toggleStatusFilter: () => {},
  filteredTasks: [],
});

const TasksContextProvider = ({children}: {children: ReactNode}) => {
  const [tasks, setTasks] = useState<TodoListType>([
    {
      id: uuidv4(),
      title: 'Teste',
      description: 'Description',
      category: 'Test',
      status: TaskStatus.Todo,
      creationDate: new Date(),
    },
  ]);

  const [statusFilter, setStatusFilter] = useState<Array<TaskStatus>>([
    TaskStatus.Done,
    TaskStatus.Todo,
  ]);

  const [filteredTasks, setFilteredTasks] = useState<TodoListType>([]);

  useEffect(() => {
    setFilteredTasks(
      tasks.filter(task =>
        statusFilter.length > 0 ? statusFilter.includes(task.status) : false,
      ),
    );
  }, [statusFilter]);

  const toggleStatusFilter = (status: TaskStatus) => {
    if (!statusFilter.includes(status)) {
      setStatusFilter([...statusFilter, status]);
    } else {
      setStatusFilter(statusFilter.filter(filter => filter != status));
    }
  };

  const addTask = (title: string, description: string, category: string) => {
    setTasks([
      ...tasks,
      {
        id: uuidv4(),
        title,
        description,
        category,
        status: TaskStatus.Todo,
        creationDate: new Date(),
      },
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
        task.id == id ? {...task, title, description, category} : task,
      ),
    );
  };

  return (
    <TasksContext.Provider
      value={{
        tasks,
        statusFilter,
        addTask,
        toggleTaskStatus,
        removeTask,
        editTask,
        toggleStatusFilter,
        filteredTasks,
      }}>
      {children}
    </TasksContext.Provider>
  );
};

export default TasksContextProvider;
