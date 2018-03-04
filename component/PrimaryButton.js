import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity, } from 'react-native';

export default class PrimaryButton extends Component {
  render() {
    return (
      <TouchableOpacity onPress={this.props.onPress}>
        <Text>{this.props.label}</Text>
      </TouchableOpacity>
    );
  }
};
