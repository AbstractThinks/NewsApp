import React, { Component } from 'react';
import {
  View,
  Text
} from 'react-native';
import NavigationBar from 'react-native-navbar';
import CustomScreen from './ReactNativeNavbar2.2.js';


class InitialScreen extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'InitialScreen';
        this.props.navigator.push({
	        rightButtonTitle: 'Shopping',
	    });
    }
    handler() {
    	console.log(this);
    }
    render() {
	    return (
	      <View style={{ flex: 1, backgroundColor: '#ff9900', }} >
	        <Text onPress={this.handler.bind(this)}>
	        	firstPage
	        </Text>
	      </View>
	    );
		
    }
}

export default InitialScreen;
