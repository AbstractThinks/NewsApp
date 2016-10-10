import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableHighlight,
  Image,
} from 'react-native';
import NavigationBar from 'react-native-navbar';
import Icon from 'react-native-vector-icons/Ionicons';
import Styles from '../../style/style.js';
import Article from '../article/article.js';
import GiftedListView from 'react-native-gifted-listview';

class ListItem extends React.Component {
  _onFetch(page = 1, callback, options) {
      setTimeout(() => {
          var rows = ['row ' + ((page - 1) * 3 + 1), 'row ' + ((page - 1) * 3 + 2), 'row ' + ((page - 1) * 3 + 3)];
          if (page === 3) {
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
          <View >
              <Text style = {[Styles.ListContentTitle]}> { rowData } </Text> 
              <Text style = {[Styles.ListContentDescrible]}> 
                    图片文件的查找会和JS模块的查找方式一样。在上面的这个例子里，
                    是哪个组件引用了这个图片，
                    Packager就会去这个组件所在的文件夹下查找my-icon.png。
                    并且，如果你有my-icon.ios.png和my-icon.android.png，
                    Packager就会根据平台而选择不同的文件。</Text>
              <Text style = {[Styles.ListContentSubtitle]}></Text>
          </View>
        </TouchableHighlight >
      );
  }


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

