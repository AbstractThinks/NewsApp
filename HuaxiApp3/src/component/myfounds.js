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

class MyFoundsListItem extends React.Component {
  _onFetch(page = 1, callback, options) {
    callback(this.props.foundsData, {
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
          style = {[styles.ListComponent]}>
          <View style={[{flexDirection: 'row', paddingLeft: 15, paddingRight: 15, }]}>
              <View >
                <Text style = {[Styles.ListContentTitle]}> {rowData.type == "1"? "文章分成收入":"文章解锁支出"}</Text>
                <Text style={{fontSize: 14, color: 'rgb(154, 154, 154)', marginLeft: 4}}>{rowData.last_reply_at }</Text>
              </View>
              <View style={[{flexDirection: 'row', flex: 1, justifyContent: 'flex-end', alignSelf: 'center'}]}>
                <Text style = {[Styles.ListContentTitle,{fontSize: 18, color:'rgb(211, 179, 106)'}]}>{rowData.author.loginname} </Text>
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


export default MyFoundsListItem;
