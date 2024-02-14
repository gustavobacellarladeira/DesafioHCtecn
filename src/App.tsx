import React from 'react';
import {LogBox} from 'react-native';
import {Provider} from 'react-redux';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import TabNavigator from './navigation/tab/navigation';
import {store} from './store/store';

LogBox.ignoreLogs([
  'RCTBridge required dispatch_sync to load RCTAccessibilityManager. This may lead to deadlocks',
]);

const App = () => {
  const gestureStyle = {flex: 1};

  return (
    <Provider store={store}>
      <GestureHandlerRootView style={gestureStyle}>
        <NavigationContainer>
          <TabNavigator />
        </NavigationContainer>
      </GestureHandlerRootView>
    </Provider>
  );
};

export default App;
