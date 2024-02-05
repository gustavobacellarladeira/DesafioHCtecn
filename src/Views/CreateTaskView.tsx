import React, {useContext, useState} from 'react';
import {Button, StyleSheet, Text, TextInput, View} from 'react-native';
import ViewContainer from '../Components/ViewContainer';
import {Typography} from '../Styles/Typography';
import Spacer from '../Components/Spacer';
import {useNavigation} from '@react-navigation/native';
import {TasksContext} from './TasksContext';
import {TaskStatus} from '../Model/Task/TaskStatusEnum';

const CreateTaskView = () => {
  const navigation = useNavigation();
  const {addTask} = useContext(TasksContext);

  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [category, setCategory] = useState<string>('');

  const inputs = [
    {
      title: 'Title',
      value: title,
      placeholder: 'Enter the task title',
      onChange: setTitle,
    },
    {
      title: 'Description',
      value: description,
      placeholder: 'Enter the task description',
      onChange: setDescription,
    },
    {
      title: 'Category',
      value: category,
      placeholder: 'Enter the task category',
      onChange: setCategory,
    },
  ];

  return (
    <ViewContainer>
      {inputs.map(input => (
        <View style={styles.textFieldContainer}>
          <Text style={styles.label}>{input.title}</Text>
          <TextInput
            style={styles.textField}
            placeholder={input.placeholder}
            value={input.value}
            onChangeText={input.onChange}
          />
        </View>
      ))}

      <Spacer />

      <Button
        title="Add Task"
        onPress={() => {
          addTask(title, description, category);
          navigation.goBack();
        }}
      />
    </ViewContainer>
  );
};

const styles = StyleSheet.create({
  textField: {
    backgroundColor: 'white',
    borderRadius: 16,
    paddingVertical: 8,
    paddingHorizontal: 16,
    fontSize: Typography.body,
  },
  label: {
    fontSize: Typography.body,
    paddingVertical: 8,
    paddingHorizontal: 16,
    fontWeight: '600',
  },
  textFieldContainer: {
    marginBottom: 8,
  },
});

export default CreateTaskView;
