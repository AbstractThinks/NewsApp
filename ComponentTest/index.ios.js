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

// import NavigationBar from 'react-native-navbar';
// import App from './src/app.js';
// import ReactNativeNavbarTest from './src/navbar/ReactNativeNavbar.js';
// import Routing from './src/navbar/ReactNativeNavbar2.0.js';
// import NavbarIOSExample from './src/navbar/navbarIOS3.0.js';
import ModulesDemo from './src/native/nativeModule.js';

class ComponentTest extends Component {
  constructor(props) {
      super(props);
      this.displayName = 'ComponentTest';
  }
  render() {
    return (
      <ModulesDemo />
    )
  }
}


AppRegistry.registerComponent('ComponentTest', () => ComponentTest);
