import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import PrimaryButton from '../component/PrimaryButton';

export default class Launcher extends Component {
  static navigationOptions = {
    header: null,
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Grow Together!</Text>
        </View>
        <View style={styles.imageContainer}>
          <Image style={styles.biking} source={require('../resource/biking.png')}/>
        </View>
        <View style={styles.footerContainer}>
          <PrimaryButton style={styles.button} label="Get Started" onPress={() => this.props.navigation.navigate('GetActive')}/>
            <View style={styles.copyrightsContainer}>
              <Text style={styles.copyrights}>By continuing, you agree to our </Text>
              <Text style={styles.terms}>Terms of Use & Privacy Policy</Text>
            </View>
        </View>
      </SafeAreaView>
    );
  }
}

const { height, width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  titleContainer: {
    flex: 1,
  },
  imageContainer: {
    flex: 7,
    flexDirection: 'column',
    height: height/2,
  },
  buttonContainer: {
    flex: 1,
    width: width,
  },
  footerContainer: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'space-between',
    width: width,
  },
  button: {
    justifyContent: 'center',
  },
  biking: {
    width: width * 1.2,
    resizeMode: Image.resizeMode.contain,
  },
  title: {
    fontSize: 28,
    paddingTop: 40,
  },
  copyrightsContainer: {
    flexDirection: 'row'
  },
  copyrights: {
    fontSize: 10,
    color: 'rgba(0, 0, 0, 0.2)'
  },
  terms: {
    fontSize: 10,
    color: 'rgba(0, 0, 0, 0.5)'
  },
});
