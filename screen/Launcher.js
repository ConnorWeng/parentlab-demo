import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import PrimaryButton from '../component/PrimaryButton';
import { Constants, CommonStyles } from '../Constants';

export default class Launcher extends Component {
  static navigationOptions = {
    header: null,
  }

  render() {
    return (
      <View style={[ CommonStyles.container, styles.container ]}>
        <View style={ styles.titleContainer }>
          <Text style={[ CommonStyles.largeFont, styles.title ]}>Grow Together!</Text>
        </View>
        <View style={ styles.imageContainer }>
          <View style={ styles.groundContainer }>
            <Image style={ styles.ground } source={ require('../resource/ground.png') }/>
          </View>
          <Image style={ styles.biking } source={ require('../resource/biking.png') }/>
        </View>
        <View style={ styles.footerContainer }>
          <View style={ styles.buttonContainer }>
            <PrimaryButton style={ styles.button } label="Get Started" onPress={() => this.props.navigation.navigate('GetActive')}/>
          </View>
          <View style={ styles.copyrightsContainer }>
            <Text style={[ CommonStyles.tinyFont, styles.copyrights ]}>By continuing, you agree to our </Text>
            <Text style={[ CommonStyles.tinyFont, styles.terms ]}>Terms of Use & Privacy Policy</Text>
          </View>
        </View>
      </View>
    );
  }
}

const { height, width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 40,
  },
  titleContainer: {
    flex: 1,
  },
  imageContainer: {
    flex: 7,
    flexDirection: 'column',
    height: height/2,
  },
  footerContainer: {
    flex: 2.5,
    alignItems: 'center',
    justifyContent: 'space-between',
    width: width,
    backgroundColor: Constants.SECONDARY_COLOR,
    paddingBottom: 40,
    zIndex: -9999,
  },
  buttonContainer: {
    flex: 3,
    justifyContent: 'center',
  },
  button: {
    justifyContent: 'center',
  },
  biking: {
    width: width * 1.2,
    resizeMode: Image.resizeMode.contain,
  },
  groundContainer: {
    position: 'absolute',
    bottom: 0,
  },
  ground: {
    resizeMode: Image.resizeMode.scratch,
  },
  title: {
    paddingTop: 40,
  },
  copyrightsContainer: {
    flexDirection: 'row'
  },
  copyrights: {
    color: 'rgba(0, 0, 0, 0.2)'
  },
  terms: {
    color: 'rgba(0, 0, 0, 0.5)'
  },
});
