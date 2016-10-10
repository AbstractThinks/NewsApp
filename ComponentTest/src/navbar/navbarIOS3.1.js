import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import SecondPage from './navbarIOS3.2.js';


const styles = StyleSheet.create({
	emptyPage: {
	    flex: 1,
	    paddingTop: 64,
	  },
	  emptyPageText: {
	    margin: 10,
	  },
});

class firstPage extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'firstPage';
    }
    nextPage() {
      this.props.navigator.push({
        component: SecondPage,
        title: 'SencondPage',
        rightButtonTitle: 'Shopping',
      });

    }
    render() {
        return(
        	<View style={styles.emptyPage}>
		        <Text style={styles.emptyPageText} onPress={this.nextPage.bind(this)}>
		          firstPage
		        </Text>
		      </View>
        )
    }
}

export default firstPage;
