import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  NavigatorIOS,
} from 'react-native';
import firstPage from './navbarIOS3.1.js';

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},

});

class NavbarIOSExample extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'NavbarIOSExample';
    }
    render() {
        return(
        	<NavigatorIOS
		        style={styles.container}
		        initialRoute={{
		          title: "firstPage",
		          component: firstPage,
		          
		          
		        }}
		        
		        tintColor="#008888"
		    />

        )
    }
}

export default NavbarIOSExample;
