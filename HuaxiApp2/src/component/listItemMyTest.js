import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableHighlight,
  Image,
  StyleSheet,
} from 'react-native';
import NavigationBar from 'react-native-navbar';
import GiftedListView from 'react-native-gifted-listview';
import GiftedSpinner from 'react-native-gifted-spinner';
import { List, ListItem, Button } from 'react-native-elements';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import 'whatwg-fetch';
import Styles from '../style/style.js';
import Article from './article.js';



const styles = StyleSheet.create(Styles);

class MyListItem extends React.Component {
  _onFetch(page = 1, callback, options) {  
      setTimeout(() => {
          var rows = ['row ' + ((page - 1) * 3 + 1), 'row ' + ((page - 1) * 3 + 2), 'row ' + ((page - 1) * 3 + 3)];
          if (page === 2) {
              callback(rows, {
                  allLoaded: true, // the end of the list is reached
              });
          } else {
              callback(rows);
          }
      }, 1000); // simulating network fetching
  }
  _onPress(rowData) {
      console.log(rowData + ' pressed');
  }
  _renderRowView(rowData) {
      
      return ( 
        <TouchableHighlight
          underlayColor = '#c8c7cc'
          onPress = {
              () => this.props.navigator.push({
                component: Article,
              })
          }
          style = {[Styles.ListComponent]}>
          <View>
              <Text style = {[Styles.ListContentTitle]}> 吴小平： 不要害怕A股大熊市，朝死的整，no zuo no die one more try </Text> 
              <View style={[{flexDirection: 'row'}, {alignItems: 'center'}]}>
                <View>
                  <Image
                    style={{height: 28,width: 28, borderRadius: 14}}
                    source={{uri: 'http://pic1.win4000.com/wallpaper/4/510f446941311.jpg'}}
                  />
                </View>
                <View style={{marginLeft: 8}}>
                  <Text style={{fontSize: 14, color: 'rgb(154, 154, 154)'}}>大傻逼一个</Text>
                </View>
                <View style={{marginLeft: 16}}>
                  <MaterialIcons name="av-timer" size={20} color={'rgb(154, 154, 154)'} />
                </View>
                <View style={{marginLeft: 4}}>
                  <Text style={{fontSize: 14, color: 'rgb(154, 154, 154)'}}>2016-09-07</Text>
                </View>
              </View>
                
          </View>
        </TouchableHighlight >
      );
  }
  _renderPaginationAllLoadedView() {
    return (
      <View style={[styles.paginationView]}>
      </View>
    );
  }
  
  _renderPaginationWaitingView(paginateCallback) {

    return (
      <View style={{marginTop: 16, marginBottom: 16}}>
        <Button
          small
          icon={{name: 'cached'}}
          onPress={paginateCallback}
          title='加载更多' />
      </View>
      

    );
  }

	render() {
		return(
			<GiftedListView
          rowView={this._renderRowView.bind(this)}
          onFetch={this._onFetch.bind(this)}
          firstLoader={true}
          initialListSize={3}
          pagination={true}
          refreshable={false} 
          withSections={false}
          enableEmptySections={true}
          paginationWaitingView={this._renderPaginationWaitingView}
          paginationAllLoadedView={this._renderPaginationAllLoadedView}

          customStyles={{
              paginationView: {
                  backgroundColor: '#eee',
              },
          }}
          refreshableTintColor="#9E9E9E"
      />
		);
	}
}


export default MyListItem;