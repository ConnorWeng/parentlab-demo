import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, Dimensions, FlatList } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import { connect } from 'react-redux';
import { Constants, CommonStyles } from '../Constants';
import { formatPlayTime } from '../util/PlayTime';

class GetActive extends Component {
  static navigationOptions = {
    title: 'Get Active',
  }

  constructor(props) {
    super(props);
    this.state = {
      playTime: '00:00/00:00',
    };
    this.soundObject = new Expo.Audio.Sound();
  }

  async componentDidMount() {
    if (!this.props.content.get_active) {
      this.props.getContent();
    }
    this.soundObject.setOnPlaybackStatusUpdate(status => {
      if (!isNaN(status.positionMillis) && !isNaN(status.durationMillis)) {
        this.setState({ playTime: formatPlayTime(status) });
      }
    });
    try {
      await this.soundObject.loadAsync({ uri: 'http://mp3-128.cdn107.com/music/02/38/67/0238670266.mp3' });
      await this.soundObject.playAsync();
    } catch (error) {
      console.log('A play error occurred.', error)
    }
  }

  async componentWillUnmount() {
    this.soundObject.setOnPlaybackStatusUpdate(null);
    await this.soundObject.stopAsync();
  }

  render() {
    if (this.props.content.get_active) {
      return (
        <SafeAreaView style={ CommonStyles.container }>
          <FlatList
             style={[ CommonStyles.container, CommonStyles.flatList ]}
             renderItem={ this.renderItem.bind(this) }
             data={ this.props.content.get_active }
             keyExtractor={ (item, index) => item.content_id }
          />
          <View style={ CommonStyles.center, { alignItems: 'center', justifyContent: 'center', position: 'absolute', width: 100, height: 40, borderRadius: 20, left: 20, bottom: 20, backgroundColor: Constants.SECONDARY_COLOR }}>
            <Text>{ this.state.playTime }</Text>
          </View>
        </SafeAreaView>
      );
    } else {
      return (
        <SafeAreaView style={ CommonStyles.container, CommonStyles.center }>
          <Text>Loading...</Text>
        </SafeAreaView>
      );
    }
  }

  renderItem({ item }) {
    const article = item;
    const contentId = article.content_id;
    const steps = [];
    article.steps.forEach((step, index) => {
      steps.push(
        <View key={ contentId + index }>
          <View style={[ CommonStyles.center, CommonStyles.padding20 ]}>
            <Text style={{ color: Constants.PRIMARY_COLOR }}>STEP {index}</Text>
          </View>
          <Text>{step}</Text>
        </View>
      );
    });
    return (
      <View style={[ CommonStyles.container, styles.articleContainer ]}>
        <View>
          <Image style={ styles.articleImage } source={{ uri: 'http:' + article.image.url }} />
        </View>
        <View style={ styles.textContainer }>
          <Text style={ CommonStyles.largeFont }>{ article.name }</Text>
        </View>
        {
          article.instruction ?
            <View style={ styles.textContainer }>
              <Text>{ article.instruction }</Text>
            </View> : null
        }
        <View style={ styles.textContainer }>
          {steps}
        </View>
      </View>
    );
  }
}

const {height, width} = Dimensions.get('window');

const styles = StyleSheet.create({
  textContainer: {
    paddingTop: 20,
  },
  articleContainer: {
    flexDirection: 'column', alignItems: 'center', paddingBottom: 40
  },
  articleImage: {
    width: width/2, height: width/2, borderRadius: width/4
  },
});

const actions = (dispatch) => {
  return {
    getContent: () => {
      return fetch("https://plgaia-staging.herokuapp.com/api/v1/post_get_active/4Wa0y74X1mAKKIo2qgiWii", {
        headers: {
          'authorization': 'Token token=ZVKgYbjoOxoM9fvuhDvQOAtt',
          'content-type': 'application/json',
        }
      }).then(response => response.json(), error => console.log('A fetch error occurred.', error))
        .then(json => {
          dispatch({ type: 'SET_CONTENT', content: json });});
    },
  };
};

export default connect(state => state.content, actions)(GetActive);
