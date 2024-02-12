import React, {useState} from 'react';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import {colors} from 'src/styles';
import styles from './styles';

type CheckBoxProps = {
  onPress: () => void;
};

const CheckBox = ({onPress}: CheckBoxProps) => {
  const [checked, setChecked] = useState(false);

  const handlePress = () => {
    onPress();
    setChecked(!checked);
  };

  return (
    <TouchableOpacity onPress={handlePress} style={styles.container}>
      {checked ? (
        <Icon name="checkmark" size={30} color={colors.primary} />
      ) : null}
    </TouchableOpacity>
  );
};

export default CheckBox;
