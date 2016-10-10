import React, { Component } from 'react';
import {
  View,
  Text
} from 'react-native';
import NavigationBar from 'react-native-navbar';
import InitialScreen from './ReactNativeNavbar2.1.js';

class Routing extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'ReactNativeNavbar';
    }

    render() {

		const initialRoute = {
	      component: InitialScreen,
	    };
	    const rightButtonConfig = {
		    title: 'Next',
		    handler: () => {
		      console.log(this)
		      alert('hello!');

		    },
		};
		const titleConfig = {
		    title: 'Hello, world',
		};

	    return (
	        <NavigationBar
				initialRoute={initialRoute}
				rightButton={rightButtonConfig}
				title={titleConfig}
				
			/>
	    );
		
    }
}

export default Routing;
