/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {AppRegistry} from 'react-native';
import AppRootContainer from './src/script/appContainer.js'

const NewsApp2 = () => (
  <AppRootContainer />
)


AppRegistry.registerComponent('NewsApp2', () => NewsApp2);
