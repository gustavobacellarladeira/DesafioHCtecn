import React, {ReactNode} from 'react';
import {StyleSheet, View} from 'react-native';

const HStack = ({children}: {children: ReactNode}) => (
  <View style={styles.hStack}>
    {React.Children.map(children, child => (
      <>{child}</>
    ))}
  </View>
);

const styles = StyleSheet.create({
  hStack: {
    flexDirection: 'row',
  },
});

export default HStack;
