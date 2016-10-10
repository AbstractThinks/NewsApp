import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

const styles = StyleSheet.create({
	emptyPage: {
	    flex: 1,
	    paddingTop: 64,
	  },
	  emptyPageText: {
	    margin: 10,
	  },
});

class SecondPage extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'SecondPage';
    }
    render() {
        return(
        	<View style={styles.emptyPage}>
		        <Text style={styles.emptyPageText}>
		          SecondPage
		        </Text>
		      </View>
        )
    }
}

export default SecondPage;
