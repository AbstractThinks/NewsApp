import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import NavigationBar from 'react-native-navbar';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import 'whatwg-fetch';

import ArticleWebView from './articleWebView.js';
import Styles from '../style/style.js';

const styles = StyleSheet.create(Styles);
class Article extends Component {
  constructor(props) {
    super(props);
    this.displayName = 'InitialScreen'; 
    this.state = {}  
  }
  

  _onFetch(options) {
    that = options
    fetch('/Users/Jesse/Desktop/NewsApp/HuaxiApp2/src/data/article.json')
      .then(function(response) {
        return response.json()
      })
      .then(function(json) {
        that.setState({

          title : json.result.title,
          content : json.result.content
        
        })
      }).catch(function(ex) {
        console.log('parsing failed', ex)
      })
    
  }

  componentWillMount() {
      this._onFetch(this);
  }

  _handlepraise() {
    console.log("_handlepraise")
  }
  _handleinverted () {
    console.log("_handleinverted")
  }
  _returnBack () {
    this.props.navigator.pop()
  }
  render() {
    const titleConfig = {
        title: 'Article screen',
        tintColor: Styles.ThemeColor.color,
    };
    return (
      <View style={[styles.container, styles.backWhite]}>
        <NavigationBar
          title={titleConfig}
          leftButton={<Ionicons name="ios-arrow-back" size={30} color={Styles.ThemeColor.color} style={[styles.arrowLeft]} onPress={this._returnBack.bind(this)}/>}
          tintColor={Styles.ThemeBackColor.color} 
          />
  
            <View style={[styles.container]}>
              <ArticleWebView />
    
            </View>
              
 
          
      </View>
    );
  }
}

export default Article