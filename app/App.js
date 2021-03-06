import React, { Component } from 'react'
import {Scene, Router} from 'react-native-router-flux'
import { Provider, connect } from 'react-redux'
import configureStore from './store/configureStore'
import Home from './components/Home'
import HomeContainer from './containers/HomeContainer'

let store = configureStore()

const RouterWithRedux = connect()(Router)

class OpinionsApp extends Component {
  render() {
    return (
      <Provider store={store}>
        <RouterWithRedux>
          <Scene key="home" component={HomeContainer} hideNavBar={true} title="Home" initial={true}/>
        </RouterWithRedux>
      </Provider>
    );
  }
}

export default OpinionsApp