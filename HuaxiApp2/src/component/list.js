import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableHighlight,
  StyleSheet,
} from 'react-native';
import NavigationBar from 'react-native-navbar';
import GiftedListView from 'react-native-gifted-listview';


import Styles from '../style/style.js';
import Article from './article.js';
import ListItem from './listItem.js';

const styles = StyleSheet.create(Styles);
class InitialScreen extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'InitialScreen';   
    }
    
    render() {

      const titleConfig = {
          title: 'Hello, world',
          tintColor: Styles.ThemeColor.color,
      };
       return (
	      <View style={[styles.container]}>
          <NavigationBar
          title={titleConfig}
          tintColor={Styles.ThemeBackColor.color}
          />
          <View style={[styles.container]}>
            <ListItem navigator={this.props.navigator}/>
          </View>
        </View>

	    );
		
    }
}

export default InitialScreen;