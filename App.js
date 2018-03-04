import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import Launcher from './screen/Launcher';
import GetActive from './screen/GetActive';
import reducer from './reducer';

export const store = createStore(
  reducer,
  applyMiddleware(thunkMiddleware),
);

export const AppNavigator = StackNavigator({
  Launcher: { screen: Launcher },
  GetActive: { screen: GetActive }
});

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AppNavigator/>
      </Provider>
    );
  }
}
