import {StyleSheet} from 'react-native';
import {colors, metrics} from 'src/styles';

const styles = StyleSheet.create({
  container: {
    width: 35,
    height: 35,
    borderWidth: 3,
    borderColor: colors.primary,
    borderRadius: metrics.borderRadius,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
