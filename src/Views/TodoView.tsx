import React, {useState} from 'react';
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import 'react-native-get-random-values';
import {v4 as uuidv4} from 'uuid';
import {
  TaskStatus,
  TaskStatusChars,
  toggleStatus,
} from '../Model/Task/TaskStatusEnum';
import {TaskType} from '../Model/Task/TaskType';

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

  const renderItem = ({item}: {item: TaskType}) => (
    <View style={styles.taskContainer}>
      <TouchableOpacity onPress={() => toggleTaskStatus(item.id)}>
        <Text style={styles.checkbox}>{TaskStatusChars[item.status]}</Text>
      </TouchableOpacity>

      <View>
        <Text key={item.id} style={styles.taskLabel}>
          {item.title}
        </Text>

        <View style={styles.hStack}>
          <Text style={styles.descriptionLabel}>{item.description}</Text>
          <Text style={styles.tag}>{item.category}</Text>
        </View>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Todo List</Text>
      <FlatList data={tasks} renderItem={renderItem} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  checkbox: {
    fontSize: 24,
    paddingRight: 8,
  },
  taskLabel: {
    fontSize: 24,
    fontWeight: '600',
  },
  title: {
    fontSize: 50,
    fontFamily: 'monospace',
    paddingBottom: 16,
  },
  hStack: {
    flexDirection: 'row',
  },
  tag: {
    backgroundColor: 'lightgray',
    fontSize: 12,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 16,
  },
  descriptionLabel: {
    fontSize: 16,
    paddingRight: 8,
  },
  taskContainer: {
    flexDirection: 'row',
    paddingBottom: 16,
  },
});

export default TodoView;
