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
import 'whatwg-fetch';
import Styles from '../style/style.js';
import Article from './article.js';



const styles = StyleSheet.create(Styles);

class ListItem extends React.Component {
  _onFetch(page = 1, callback, options) {
      fetch('/Users/Jesse/Desktop/NewsApp/HuaxiApp2/src/data/list.json')
        .then(function(response) {
          return response.json()
        })
        .then(function(json) {
          console.log('parsed json', json)
          callback(json.result)
        }).catch(function(ex) {
          console.log('parsing failed', ex)
        })
      // setTimeout(() => {
      //     var rows = ['row ' + ((page - 1) * 3 + 1), 'row ' + ((page - 1) * 3 + 2), 'row ' + ((page - 1) * 3 + 3)];
      //     if (page === 3) {
      //         callback(rows, {
      //             allLoaded: true, // the end of the list is reached
      //         });
      //     } else {
      //         callback(rows);
      //     }
      // }, 1000); // simulating network fetching
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
          <View >
              <Text style = {[Styles.ListContentTitle]}> { rowData.title } </Text> 
              <Text style = {[Styles.ListContentDescrible]}> 
                   { rowData.description }</Text>
              <Text style = {[Styles.ListContentSubtitle]}></Text>
          </View>
        </TouchableHighlight >
      );
  }
  // _renderPaginationAllLoadedView() {
  //   return (
  //     <View style={[styles.paginationView]}>
  //       <Text style={[styles.actionsLabel]}>
  //         ~
  //       </Text>
  //     </View>
  //   );
  // }
  // _renderPaginationFetchigView() {
  //   return (
  //     <View>
  //       <GiftedSpinner />
  //     </View>
  //   );
  // }
  // _renderPaginationWaitingView(paginateCallback) {

  //   return (
  //     <TouchableHighlight
  //       underlayColor='#c8c7cc'
  //       onPress={paginateCallback}
  //       style={styles.paginationView}
  //     >
  //       <Text style={[styles.actionsLabel, {fontSize: 13}]}>
  //         Load more
  //       </Text>
  //     </TouchableHighlight>
  //   );
  // }
  // _renderRefreshableWaitingView() {
  //   return (
  //     <View style={[styles.paginationView]}>
  //       <Text style={[styles.actionsLabel]}>
  //         ~
  //       </Text>
  //     </View>
  //   );
  // }
  // _renderRefreshableWillRefreshView() {
  //   return (
  //     <View style={[styles.paginationView]}>
  //       <Text style={[styles.actionsLabel]}>
  //         ~
  //       </Text>
  //     </View>
  //   );
  // }
  // _renderRefreshableFetchingView() {
  //   return (
  //     <View style={[styles.paginationView]}>
  //       <Text style={[styles.actionsLabel]}>
  //         ~
  //       </Text>
  //     </View>
  //   );
  // }

	render() {
		return(
			<GiftedListView
          rowView={this._renderRowView.bind(this)}
          onFetch={this._onFetch.bind(this)}
          firstLoader={true}
          pagination={true}
          refreshable={true} 
          withSections={false}
          
          customStyles={{
              paginationView: {
                  backgroundColor: '#eee',
              },
          }}
          refreshableTintColor="blue"
      />
		);
	}
}


export default ListItem;