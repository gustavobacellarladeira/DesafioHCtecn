import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import TabNavigator from './navigation/tab/navigation';

const App = () => {
  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  );
};

export default App;
