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

class MyBuyListItem extends React.Component {
   constructor(props) {
        super(props);
        this.displayName = 'MyBuyListItem';
  }
  _onFetch(page = 1, callback, options) {
    callback(this.props.buyData, {
        allLoaded: true, // the end of the list is reached
    });

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
                articleData:rowData
              })
          }
          style = {[styles.ListComponent]}>
          <View>
              <Text style = {[styles.ListContentTitle]}> {rowData.title} </Text>
              <View style={[{flexDirection: 'row'}, {alignItems: 'center',paddingTop:8}]}>
                <View>
                  <Image
                    style={{height: 28,width: 28, borderRadius: 14}}
                    source={{uri: rowData.author.avatar_url}}
                  />
                </View>
                <View style={{marginLeft: 8}}>
                  <Text style={{fontSize: 14, color: 'rgb(154, 154, 154)'}}>{rowData.author.loginname}</Text>
                </View>
                <View style={{marginLeft: 16}}>
                  <MaterialIcons name="av-timer" size={20} color={'rgb(154, 154, 154)'} />
                </View>
                <View style={{marginLeft: 4}}>
                  <Text style={{fontSize: 14, color: 'rgb(154, 154, 154)'}}>{rowData.last_reply_at}</Text>
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


export default MyBuyListItem;
