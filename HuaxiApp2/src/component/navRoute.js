import React, { Component } from 'react';
import {
  View,
  Text,
  Navigator,
} from 'react-native';


import NavigationBar from 'react-native-navbar';
import Styles from '../style/style.js';
import InitialScreen from './list.js';




function renderScene(route, navigator) {
  return <route.component route={route} navigator={navigator} />;
}

class NavRoute extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'NavRoute';
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

export default NavRoute;