import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableHighlight,
} from 'react-native';
import NavigationBar from 'react-native-navbar';
import Icon from 'react-native-vector-icons/Ionicons';
import GiftedListView from 'react-native-gifted-listview';
import Styles from '../../style/style.js';
import Article from '../article/article.js';
import ListItem from '../listItem/listitem.js';
import NavTab from '../navtab/navtab.js';


class InitialScreen extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'InitialScreen';
        
    }
    
    render() {
        const rightButtonConfig = {
            title: 'Login',
            handler: () => this.props.navigator.push({
              component: Article,
            }),
            tintColor: Styles.ThemeColor.color,
        };

        const titleConfig = {
            title: 'Hello, world',
            tintColor: Styles.ThemeColor.color,
        };
       return (
	      <View style={{ flex: 1}}>
          <NavigationBar
          title={titleConfig}
          tintColor={Styles.ThemeBackColor.color}
          rightButton={rightButtonConfig} 
          />
          <View style={{ flex: 1}}>
            <ListItem navigator={this.props.navigator}/>
          </View>
        </View>

	    );
		
    }
}

export default InitialScreen;