import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import {Settings} from 'src/screens';
import colors from 'src/styles/colors';
import StackNavigator from '../stack/navigation';
import {TabNavigationProps} from './types';

const Tab = createBottomTabNavigator<TabNavigationProps>();

type iconProps = {
  name: string;
  focused: boolean;
};

const TabNavigator = () => {
  const iconTab = ({focused, name}: iconProps) => {
    const color = focused ? colors.primary : colors.grey;
    return <Icon name={name} size={25} color={color} />;
  };

  return (
    <Tab.Navigator initialRouteName="Home" screenOptions={{headerShown: false}}>
      <Tab.Screen
        name="Home"
        component={StackNavigator}
        options={{
          tabBarIcon: ({focused}) => iconTab({name: 'home', focused}),
          tabBarActiveTintColor: colors.primary,
          tabBarInactiveTintColor: colors.grey,
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarIcon: ({focused}) => iconTab({name: 'settings', focused}),
          tabBarActiveTintColor: colors.primary,
          tabBarInactiveTintColor: colors.grey,
        }}
      />
    </Tab.Navigator>
  );
};
export default TabNavigator;
