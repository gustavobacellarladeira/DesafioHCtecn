import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {TabNavigationProps} from './types';
import {Home, Settings} from '../../screens';

const Tab = createBottomTabNavigator<TabNavigationProps>();

const TabNavigator = () => {
  return (
    <Tab.Navigator initialRouteName="Home">
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  );
};
export default TabNavigator;
