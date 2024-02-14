import {StyleSheet} from 'react-native';
import {colors, metrics} from 'src/styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: colors.secondary,
    marginVertical: metrics.margin,
    marginHorizontal: metrics.margin / 2,
  },
  placeholder: {
    fontSize: 16,
    margin: metrics.margin / 2,
    color: colors.black,
  },
  textInput: {
    marginHorizontal: metrics.margin / 2,
    padding: metrics.padding,
    borderWidth: 2,
    backgroundColor: colors.secondary,
    borderRadius: metrics.borderRadius,
    borderColor: colors.primary,
    shadowOpacity: 0.1,
    shadowOffset: {
      width: 0,
      height: 20,
    },
    shadowRadius: metrics.borderRadius,
    elevation: 5,
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: metrics.margin,
    marginHorizontal: metrics.margin / 2,
    padding: metrics.padding,
    backgroundColor: colors.primary,
    borderRadius: metrics.borderRadius,
    shadowOpacity: 0.1,
    shadowOffset: {
      width: 0,
      height: 20,
    },
    shadowRadius: metrics.borderRadius,
    elevation: 5,
  },
  textButton: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.secondary,
  },
  messageError: {
    fontSize: 12,
    marginHorizontal: metrics.margin / 2,
    marginTop: metrics.margin / 2,
    color: colors.red,
  },
});

export default styles;
