import React, {ReactNode} from 'react';
import {StyleSheet, View} from 'react-native';

const ViewContainer = ({children}: {children: ReactNode}) => (
  <View style={styles.container}>
    {React.Children.map(children, child => (
      <>{child}</>
    ))}
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});

export default ViewContainer;
