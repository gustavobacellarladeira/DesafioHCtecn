import React from 'react';
import styles from './styles';
import {BorderlessButton} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';
import {colors} from 'src/styles';

type FloatButtonProps = {
  name: string;
  onPress: () => void;
};

const FloatButton = ({name, onPress}: FloatButtonProps) => {
  return (
    <BorderlessButton style={styles.container} onPress={onPress}>
      <Icon name={name} size={35} color={colors.secondary} />
    </BorderlessButton>
  );
};

export default FloatButton;
