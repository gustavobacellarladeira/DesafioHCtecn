import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Form, Home} from 'src/screens';
import {StackNavigationProps} from './types';

const Stack = createNativeStackNavigator<StackNavigationProps>();

const StackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="HomeList"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="HomeList" component={Home} />
      <Stack.Screen name="Form" component={Form} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
