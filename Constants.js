import { StyleSheet } from 'react-native';

export const Constants = {
  PRIMARY_COLOR: '#43BCD3',
  SECONDARY_COLOR: '#D9F1F5',
};

export const CommonStyles = StyleSheet.create({
  center: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  flatList: {
    backgroundColor: 'white', paddingRight: 20, paddingLeft: 20,
  },
  padding20: {
    padding: 20,
  },
  largeFont: {
    fontSize: 28,
  },
  tinyFont: {
    fontSize: 10,
  },
});
