import {StyleSheet} from 'react-native';
import {metrics} from 'src/styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: metrics.margin,
    marginHorizontal: metrics.margin,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: metrics.margin / 2,
    marginHorizontal: metrics.margin,
  },
  row: {
    gap: 10,
    alignItems: 'center',
    flexDirection: 'row',
  },
  text: {
    fontSize: 16,
  },
});

export default styles;
