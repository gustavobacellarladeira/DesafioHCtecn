import React, {useState} from 'react';
import {
  Button,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import 'react-native-get-random-values';
import {v4 as uuidv4} from 'uuid';
import {
  TaskStatus,
  TaskStatusChars,
  toggleStatus,
} from '../Model/Task/TaskStatusEnum';
import {TaskType} from '../Model/Task/TaskType';
import HStack from '../Components/HStack';
import ViewContainer from '../Components/ViewContainer';
import Spacer from '../Components/Spacer';
import {Typography} from '../Styles/Typography';

type TodoListType = Array<TaskType>;

const TodoView = () => {
  const [tasks, setTasks] = useState<TodoListType>([
    {
      id: uuidv4(),
      title: 'Teste',
      description: 'Description',
      category: 'Test',
      status: TaskStatus.Todo,
    },
    {
      id: uuidv4(),
      title: 'Teste 2',
      description: 'Description 2',
      category: 'Test',
      status: TaskStatus.Todo,
    },
  ]);

  const toggleTaskStatus = (id: string) => {
    setTasks(
      tasks.map(task =>
        task.id == id ? {...task, status: toggleStatus(task.status)} : task,
      ),
    );
  };

  const addTask = () => {
    setTasks([
      ...tasks,
      {
        id: uuidv4(),
        title: 'New Task',
        description: 'New task description',
        category: 'Test 2',
        status: TaskStatus.Todo,
      },
    ]);
  };

  const renderItem = ({item}: {item: TaskType}) => (
    <View style={styles.taskContainer}>
      <TouchableOpacity onPress={() => toggleTaskStatus(item.id)}>
        <Text style={styles.checkbox}>{TaskStatusChars[item.status]}</Text>
      </TouchableOpacity>

      <View>
        <Text key={item.id} style={styles.taskLabel}>
          {item.title}
        </Text>

        <HStack>
          <Text style={styles.descriptionLabel}>{item.description}</Text>
          <Text style={styles.tag}>{item.category}</Text>
        </HStack>
      </View>
    </View>
  );

  return (
    <ViewContainer>
      <FlatList data={tasks} renderItem={renderItem} />

      <Spacer />

      <Button title="+ Add new task" onPress={addTask} />
    </ViewContainer>
  );
};

const styles = StyleSheet.create({
  checkbox: {
    fontSize: Typography.title2,
    paddingRight: 8,
  },
  taskLabel: {
    fontSize: Typography.title2,
    fontWeight: '600',
  },
  title: {
    fontSize: Typography.largeTitle,
    fontFamily: 'monospace',
    paddingBottom: 16,
  },
  tag: {
    backgroundColor: 'lightgray',
    fontSize: Typography.caption1,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 16,
  },
  descriptionLabel: {
    fontSize: Typography.callout,
    paddingRight: 8,
  },
  taskContainer: {
    flexDirection: 'row',
    paddingBottom: 16,
  },
});

export default TodoView;
