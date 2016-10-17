import React, { Component } from 'react';
import { View, Image, StyleSheet, StatusBar, TouchableOpacity } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import ScrollableTabView from 'react-native-scrollable-tab-view';

import Styles from '../style/style.js';
import NavRoute from './navRoute.js';
import NavRouteMy from './navRouteMy.js';
import TabBarElement from './navTabElement.js';

const styles = StyleSheet.create(Styles);

export default class TopBarIconExample extends Component {
  render() {

    return (
      <ScrollableTabView
        renderTabBar = {() => <TabBarElement />}
        tabBarPosition = "bottom"
      >
        <NavRoute tabLabel="library-books" />
        <NavRouteMy tabLabel="person" />
      </ScrollableTabView>
    );
  }

  
}