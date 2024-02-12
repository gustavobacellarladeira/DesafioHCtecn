import {StyleSheet} from 'react-native';
import {colors, metrics} from 'src/styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.secondary,
    marginVertical: metrics.margin,
    marginHorizontal: metrics.margin / 2,
  },
});

export default styles;
