import { connect } from 'react-redux'
import React, { Component, PropTypes } from 'react'
import Home from '../components/Home'


function mapStateToProps(state) {
  return {
    ...state
  }
}

export default connect(mapStateToProps)(Home)
