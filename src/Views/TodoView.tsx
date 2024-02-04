import React, {useState} from 'react';
import {FlatList, Text, TouchableOpacity, View} from 'react-native';

type TodoType = {
  title: string;
  key: string;
};
type TodoListType = Array<TodoType>;

const TodoView = () => {
  const [todos, setTodos] = useState<TodoListType>([
    {title: 'Teste', key: 'todo1'},
    {title: 'Teste 2', key: 'todo2'},
  ]);

  const renderItem = ({item}: {item: TodoType}) => (
    <Text key={item.key}>{item.title}</Text>
  );

  return (
    <View>
      <Text>Todo</Text>
      <FlatList data={todos} renderItem={renderItem} />
    </View>
  );
};

export default TodoView;
