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
import ArticleListItem from './articleListItem.js';

const styles = StyleSheet.create(Styles);
class InitialScreen extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'InitialScreen';
    }
    componentWillMount() {
      this.setState({
        list : <ArticleListItem navigator={this.props.navigator}/>
      })

    }
    render() {

      const titleConfig = {
          title: '好文列表',
          tintColor: Styles.ThemeTextColor.backgroundColor,
      };
       return (
	      <View style={[styles.container]}>
          <NavigationBar
          title={titleConfig}
          tintColor={Styles.ThemeColor.backgroundColor}
          />
          <View style={[styles.container]}>
            {this.state.list}
          </View>
        </View>

	    );

    }
}

export default InitialScreen;
