import React, {useState} from 'react';
import {FlatList, Text, TouchableOpacity, View} from 'react-native';

type TaskType = {
  id: string;
  title: string;
};
type TodoListType = Array<TaskType>;

const TodoView = () => {
  const [tasks, setTasks] = useState<TodoListType>([
    {id: 'tk1', title: 'Teste'},
    {id: 'tk2', title: 'Teste 2'},
  ]);

  const renderItem = ({item}: {item: TaskType}) => (
    <Text key={item.id}>{item.title}</Text>
  );

  return (
    <View>
      <Text>Todo</Text>
      <FlatList data={tasks} renderItem={renderItem} />
    </View>
  );
};

export default TodoView;
