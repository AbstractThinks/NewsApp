/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import App from './src/component/app.js';

export default class HuaxiApp3 extends Component {
  render() {
    return (

      <App />

    )

  }
}

AppRegistry.registerComponent('HuaxiApp3', () => HuaxiApp3);
