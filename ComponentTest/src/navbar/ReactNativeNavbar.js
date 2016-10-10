import React, { Component } from 'react';
import {
  View,
  Text
} from 'react-native';
import NavigationBar from 'react-native-navbar';

class ReactNativeNavbarTest extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'ReactNativeNavbar';
    }
    render() {
		var rightButtonConfig = {
			title: 'Next',
			handler: function onNext() {
				alert('hello!');
			}
		};

		var titleConfig = {
			title: 'Hello, world',
		};

		return (
			<View style={{ flex: 1, }}>
				<NavigationBar
				title={titleConfig}
				rightButton={rightButtonConfig} />
			</View>
		);
		
    }
}

export default ReactNativeNavbarTest;
