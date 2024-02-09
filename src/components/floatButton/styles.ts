import {StyleSheet} from 'react-native';
import {colors} from 'src/styles';

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    right: 15,
    bottom: 0,
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: colors.primary,
  },
});

export default styles;
