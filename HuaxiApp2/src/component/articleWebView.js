import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  WebView,
} from 'react-native';
import NavigationBar from 'react-native-navbar';
import GiftedSpinner from 'react-native-gifted-spinner';


class ArticleWebView extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'ArticleWebView';
    }
    _renderLoading() {
      return (
        <GiftedSpinner />
      );
    }
    render() {
        // return (
        // 	<WebView
	       //    style={{
	       //      backgroundColor: 'rgba(255,255,255,0.8)',
	       //      height: 200,
	       //    }}
	       //    source={{uri: 'https://ste.vn/2015/06/10/configuring-app-transport-security-ios-9-osx-10-11/'}}
	       //    scalesPageToFit={true}
	       //  />
        // );
        return (
          <WebView
            style={{
              backgroundColor: 'rgba(255,255,255,0.8)',
              height: 200,
            }}
            renderLoading = {this._renderLoading.bind(this)}
            source={require('./article.html')}
            scalesPageToFit={true}
          />
        );
    }
}

export default ArticleWebView;
