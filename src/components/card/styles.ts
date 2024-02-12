import {StyleSheet} from 'react-native';
import {colors, metrics} from 'src/styles';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: 'auto',
    height: 70,
    paddingHorizontal: metrics.padding,
    marginVertical: metrics.margin / 4,
    borderRadius: metrics.borderRadius,
    //Shadow for iOS
    shadowOpacity: 0.1,
    shadowOffset: {
      width: 0,
      height: 20,
    },
    shadowRadius: metrics.borderRadius,
    //Shadow for Android
    elevation: 5,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    fontSize: 16,
    color: colors.secondary,
  },
  describe: {
    fontSize: 14,
    color: colors.secondary,
  },
  leftSwipe: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 70,
  },
});

export default styles;
