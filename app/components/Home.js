import React, { Component, PropTypes} from 'react'
import { View, Text, ListView, StyleSheet, TouchableOpacity, Image } from 'react-native'
import Swiper from 'react-native-swiper';


class Home extends Component {
  renderSlide(topic, i) {
    return (
      <View style={styles.slide} key={i}>
        <Image
          style={styles.image}
          source={{uri: 'https://avatars2.githubusercontent.com/u/9221501?v=3&s=466'}}
          />
        <Text>{topic.title}</Text>
        <Text style={styles.text}>Hello Swiper</Text>
      </View>
    )
  }
  render() {
    let topics = this.props.topics;
    return (
      <Swiper style={styles.wrapper} showsButtons={true}>
        
        <View style={styles.slide}>
          <View style={styles.container}>
            <Image
              style={styles.image}
              source={{uri: 'https://avatars2.githubusercontent.com/u/9221501?v=3&s=466'}}
              />
              <View style={styles.backdropView}>
                <Text style={styles.text}>Hello Swiper</Text>
              </View>
          </View>
          <View style={styles.container}>
            <Image
              style={styles.image}
              source={{uri: 'https://avatars2.githubusercontent.com/u/9221501?v=3&s=466'}}
              />
              <View style={styles.backdropView}>
                <Text style={styles.text}>Hello Swiper2</Text>
              </View>
          </View>
      </View>
        <View style={styles.slide}>
          <Text style={styles.text}>Beautiful</Text>
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