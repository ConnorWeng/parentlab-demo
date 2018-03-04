import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Launcher from './screen/Launcher';
import GetActive from './screen/GetActive';

export const AppNavigator = StackNavigator({
  Launcher: { screen: Launcher },
  GetActive: { screen: GetActive }
});

export default class App extends React.Component {
  render() {
    return (
      <AppNavigator/>
    );
  }
}
