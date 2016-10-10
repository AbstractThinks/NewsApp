import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  WebView,
} from 'react-native';
import NavigationBar from 'react-native-navbar';


class ArticleWebView extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'ArticleWebView';
    }
    render() {
        return (
        	<WebView
	          style={{
	            backgroundColor: 'rgba(255,255,255,0.8)',
	            height: 200,
	          }}
	          source={{uri: 'https://ste.vn/2015/06/10/configuring-app-transport-security-ios-9-osx-10-11/'}}
	          scalesPageToFit={true}
	        />
        );
    }
}

export default ArticleWebView;
