import React, { Component } from 'react';
import { View, Image, StyleSheet, StatusBar, TouchableOpacity } from 'react-native';
import ScrollableTabView from 'react-native-scrollable-tab-view';


import Styles from '../style/style.js';
import My from './my.js';
import List from './list.js';
import TabBarElement from './tabElement.js';

const styles = StyleSheet.create(Styles);


export default class App extends React.Component {
  render() {
    return (

        <ScrollableTabView
          renderTabBar = {() => <TabBarElement />}
          tabBarPosition = "bottom"
        >
          <List tabLabel="library-books" />
          <My tabLabel="person" />
        </ScrollableTabView>

    )

  }


}
