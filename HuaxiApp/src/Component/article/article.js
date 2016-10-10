import React, { Component } from 'react';
import {
  View,
  Text
} from 'react-native';
import NavigationBar from 'react-native-navbar';

class Article extends Component {
  render() {
    const leftButtonConfig = {
      title: 'Back',
      handler: () => this.props.navigator.pop(),
    };

    return (
      <View style={{ flex: 1, backgroundColor: '#9999CC', }}>
        <NavigationBar
          title={{ title: 'Article screen', }}
          leftButton={leftButtonConfig} 
          />
      </View>
    );
  }
}

export default Article