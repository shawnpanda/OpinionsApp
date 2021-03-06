import React, { Component, PropTypes} from 'react'
import { View, Text, ListView, StyleSheet, TouchableOpacity, Image } from 'react-native'
import Swiper from 'react-native-swiper';


class Home extends Component {
        // {this.renderSlide(topics.get(0),1)}

  renderSlide(topic, i) {
    return (
      <View style={styles.slide} key={i}>
        <View style={styles.container}>
          <Image
            style={styles.image}
            source={{uri: 'https://avatars2.githubusercontent.com/u/9221501?v=3&s=466'}}
            />
            <View style={styles.backdropView}>
              <Text style={styles.text}>{topic.get('article1Title')}</Text>
            </View>
        </View>

        <View style={styles.container}>
            <Image
              style={styles.image}
              source={{uri: 'https://avatars2.githubusercontent.com/u/9221501?v=3&s=466'}}
              />
              <View style={styles.backdropView}>
                <Text style={styles.text}>{topic.get('article2Title')}</Text>
              </View>
        </View>
      </View>
    )
  }
  render() {
    let topics = this.props.topics;
    let self = this;
    return (
      <Swiper style={styles.wrapper} showsButtons={true}>
        {topics.map(function(topic, i) {
          return self.renderSlide(topic, i)
        })}
        <View style={styles.slide}>
          <Text style={styles.text}>Beautiful</Text>
          <Text>{topics.getIn([0, 'title'])}</Text>
          <Text>{topics.getIn([0, 'article1Title'])}</Text>
        </View>
        <View style={styles.slide}>
          <Text style={styles.text}>And simple</Text>
        </View>
      </Swiper>
    )
  }
}

const styles = StyleSheet.create({
  wrapper: {
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'transparent',
    backgroundColor: '#ddd',
  },
  text: {
    color: '#000',
    fontSize: 30,
    fontWeight: 'bold',
  },
  image: {
    flex: 1,
    alignSelf: 'stretch'
  },
  container: {
    flex: 2
  },
  backdropView: {
    position: 'absolute',
    left: 0,
    top:0
  }
})

export default Home