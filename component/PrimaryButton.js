import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity, } from 'react-native';

export default class PrimaryButton extends Component {
  render() {
    return (
      <TouchableOpacity style={[styles.button, this.props.style]} onPress={this.props.onPress}>
        <Text style={styles.buttonText}>{this.props.label}</Text>
      </TouchableOpacity>
    );
  }
};

const styles = StyleSheet.create({
  button: {
    height: 42,
    paddingLeft: 80,
    paddingRight: 80,
    borderRadius: 20,
    backgroundColor: '#43BCD3',
    justifyContent: 'center',
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 24,
    color: '#ffffff',
  },
});
