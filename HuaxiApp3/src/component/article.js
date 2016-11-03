import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  WebView,
} from 'react-native';
import NavigationBar from 'react-native-navbar';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import Styles from '../style/style.js';

const styles = StyleSheet.create(Styles);
class Article extends Component {
  constructor(props) {
    super(props);
    this.displayName = 'InitialScreen';
    this.state = {
      articleData : this.props.route.articleData,
      url : 'http://www.vue-js.com/topic/'+this.props.route.articleData.id,
    }
  }
  _returnBack () {
    this.props.navigator.pop()
  }
  render() {
    const titleConfig = {
        title: '好文深读',
        tintColor: Styles.ThemeTextColor.backgroundColor,
    };
    return (
      <View style={[styles.container]}>
        <NavigationBar
          title={titleConfig}
          leftButton={<Ionicons name="ios-arrow-back" size={30} color={Styles.ThemeTextColor.backgroundColor} style={[styles.arrowLeft]} onPress={this._returnBack.bind(this)}/>}
          tintColor={Styles.ThemeColor.backgroundColor}
          />

            <View style={[styles.container]}>
              <WebView
                source={{uri: this.state.url}}
                scalesPageToFit={true}
              />
            </View>

      </View>
    );
  }
}

export default Article
