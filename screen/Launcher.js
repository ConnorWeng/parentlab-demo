import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import PrimaryButton from '../component/PrimaryButton';

export default class Launcher extends Component {
  static navigationOptions = {
    header: null,
  }

  render() {
    return (
      <SafeAreaView>
        <Text>Launcher</Text>
        <PrimaryButton label="Get Started" onPress={() => this.props.navigation.navigate('GetActive')}/>
      </SafeAreaView>
    );
  }
}
