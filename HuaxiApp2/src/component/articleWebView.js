import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  WebView,
} from 'react-native';
import NavigationBar from 'react-native-navbar';
import GiftedSpinner from 'react-native-gifted-spinner';
// import WebViewBridge from 'react-native-webview-bridge';


class ArticleWebView extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'ArticleWebView';
        this.state = {
          url : `http://localhost:3000/huxiuser/article/${this.props.articleData.id}`,
          articleData: `window.articleData=${this.props.articleData}`
        }

    }
    render() {
        return (
        	<WebView
	          style={{
	            backgroundColor: 'rgba(255,255,255,0.8)',
	            height: 200,
	          }}
	          source={{uri: this.state.url}}
	          scalesPageToFit={true}
              injectedJavaScript={
                `
                (function () {
                    window.WebViewDataMock = {};
                    WebViewDataMock.userid = "123";
                    WebViewDataMock.articleid = '${this.props.articleData.id}';
                    WebViewDataMock.authorid = '${this.props.articleData.authorid}';
                    WebViewDataMock.price = '${this.props.articleData.price}';
                })()
                    
                `
              }
	        />
        );
        // return (
        //     <WebViewBridge
        //       style={{
        //         backgroundColor: 'rgba(255,255,255,0.8)',
        //         height: 200,
        //       }}
        //       source={{uri: this.state.url}}
        //       scalesPageToFit={true}
        //       injectedJavaScript={
        //         `
        //         (function () {
        //             window.userid = "123"
        //         })()
        //         `
        //       }
        //     />
        // );
        // return (
        //   <WebView
        //     style={{
        //       backgroundColor: 'rgba(255,255,255,0.8)',
        //       height: 200,
        //     }}
        //     renderLoading = {this._renderLoading.bind(this)}
        //     source={require('./article.html')}
        //     scalesPageToFit={true}
        //   />
        // );
    }
}

export default ArticleWebView;
