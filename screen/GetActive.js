import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, Dimensions, } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import { connect } from 'react-redux';

const {height, width} = Dimensions.get('window');

class GetActive extends Component {
  static navigationOptions = {
    title: 'Get Active',
  }

  componentDidMount() {
    if (!this.props.content.get_active) {
      this.props.getContent();
    }
  }

  render() {
    if (this.props.content.get_active) {
      const article = this.props.content.get_active[1];
      const contentId = article.content_id;
      const steps = [];
      article.steps.forEach((step, index) => {
        steps.push(
          <View key={ contentId + index }>
            <Text>STEP {index}</Text>
            <Text>{step}</Text>
          </View>
        );
      });
      return (
        <View style={{ flex: 1, flexDirection: 'column', alignItems: 'center', }}>
          <View>
            <Image style={{ width: width/2, height: width/2, borderRadius: width/4 }} source={{ uri: 'http:' + article.image.url }} />
          </View>
          <View>
            <Text style={{ fontSize: 28 }}>{ article.name }</Text>
          </View>
          <View>
            {steps}
          </View>
        </View>
      );
    } else {
      return (
        <SafeAreaView style={{ alignItems: 'center' }}>
          <Text>Loading...</Text>
        </SafeAreaView>
      );
    }
  }
}

const actions = (dispatch) => {
  return {
    getContent: () => {
      return fetch("https://plgaia-staging.herokuapp.com/api/v1/post_get_active/4Wa0y74X1mAKKIo2qgiWii", {
        headers: {
          'authorization': 'Token token=ZVKgYbjoOxoM9fvuhDvQOAtt',
          'content-type': 'application/json',
        }
      }).then(response => response.json(), error => console.log('An error occurred.', error))
        .then(json => {
          dispatch({ type: 'SET_CONTENT', content: json });});
    },
  };
};

export default connect(state => state.content, actions)(GetActive);
