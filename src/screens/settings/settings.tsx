import React from 'react';
import {Text, View, Switch} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';
import {CheckBox} from 'src/components';
import styles from './style';
import {useAppDispatch, useAppSelector} from 'src/store/hook';
import {settingsActions as actions} from 'src/store/features/settings/slice';
import {getShowOnlyCompleted} from 'src/store/features/settings/selector';

const Settings = () => {
  const dispatch = useAppDispatch();
  const showOnlyCompleted = useAppSelector(getShowOnlyCompleted);

  const handlePress = () => {
    dispatch(actions.setShowOnlyCompleted(!showOnlyCompleted));
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.row}>
          <Icon name="eye" size={30} color="#000" />
          <Text style={styles.text}>Apparence</Text>
        </View>
        <Switch />
      </View>
      <View style={styles.content}>
        <Text style={styles.text}>Show only completed tasks</Text>
        <CheckBox onPress={handlePress} />
      </View>
    </SafeAreaView>
  );
};

export default Settings;
