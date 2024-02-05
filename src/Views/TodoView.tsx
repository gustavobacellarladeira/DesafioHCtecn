import React, {useContext} from 'react';
import {
  Button,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import 'react-native-get-random-values';
import {useNavigation} from '@react-navigation/native';
import {TaskStatusChars} from '../Model/Task/TaskStatusEnum';
import {TaskType} from '../Model/Task/TaskType';
import HStack from '../Components/HStack';
import ViewContainer from '../Components/ViewContainer';
import Spacer from '../Components/Spacer';
import {Typography} from '../Styles/Typography';
import {TasksContext} from './TasksContext';

const TodoView = () => {
  const navigation = useNavigation();
  const {tasks, toggleTaskStatus, removeTask} = useContext(TasksContext);

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

      <Spacer />

      <HStack>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('NewTask', {isEditing: true, task: item})
          }>
          <Text style={styles.buttons}>✏️</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => removeTask(item.id)}>
          <Text style={styles.buttons}>🗑️</Text>
        </TouchableOpacity>
      </HStack>
    </View>
  );

  return (
    <ViewContainer>
      <FlatList data={tasks} renderItem={renderItem} />

      <Spacer />

      <Button
        title="+ Add new task"
        onPress={() => {
          navigation.navigate('NewTask', {isEditing: false, task: undefined});
        }}
      />
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
  buttons: {
    fontSize: Typography.body,
    backgroundColor: 'white',
    marginHorizontal: 4,
    padding: 4,
    borderRadius: 8,
  },
});

export default TodoView;
