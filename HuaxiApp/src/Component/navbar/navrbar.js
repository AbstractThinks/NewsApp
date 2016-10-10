import React, { Component } from 'react';
import {
  View,
  Text,
  Navigator,
} from 'react-native';


import NavigationBar from 'react-native-navbar';
import Styles from '../../style/style.js';
import Icon from 'react-native-vector-icons/Ionicons';
import InitialScreen from '../list/list.js';




function renderScene(route, navigator) {
  return <route.component route={route} navigator={navigator} />;
}

class Nav extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'Nav';
    }

    render() {
        const initialRoute = {
          component: InitialScreen,
        };
        return (
          <View style={{ flex: 1, }}>
            <Navigator
              initialRoute={initialRoute}
              renderScene={renderScene}
            />
          </View>
        )
    }
}

export default Nav;
