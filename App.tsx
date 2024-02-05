import React from 'react';
import {StyleSheet} from 'react-native';
import TodoView from './src/Views/TodoView';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TaskView from './src/Views/TaskView';
import TasksContextProvider from './src/Views/TasksContext';

const Stack = createNativeStackNavigator();

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <TasksContextProvider>
        <Stack.Navigator initialRouteName="TodoList">
          <Stack.Screen
            name="TodoList"
            component={TodoView}
            options={{title: 'Todo List'}}
          />
          <Stack.Screen
            name="NewTask"
            component={TaskView}
            options={{title: 'Create new Task'}}
          />
        </Stack.Navigator>
      </TasksContextProvider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    marginBottom: 16,
  },
  sectionDescription: {
    fontSize: 18,
    fontWeight: '400',
    marginBottom: 8,
  },
});

export default App;
