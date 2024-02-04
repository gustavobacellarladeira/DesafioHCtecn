import React from 'react';
import {StyleSheet, View} from 'react-native';

const Spacer = () => <View style={styles.spacer} />;

const styles = StyleSheet.create({
  spacer: {
    flex: 1,
    flexDirection: 'column',
  },
});

export default Spacer;
