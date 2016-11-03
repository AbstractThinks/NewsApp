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
import { List, ListItem, Button } from 'react-native-elements';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import 'whatwg-fetch';
import Article from './article.js'
import Styles from '../style/style.js';

const styles = StyleSheet.create(Styles);


class ArticleListItem extends React.Component {
  constructor(props) {
    super(props);

  }
  _onFetch(page = 1, callback, options) {
    var url = `http://www.vue-js.com/api/v1/topics?page=${page}&limit=5`
    fetch(url,{
        method : 'GET',
        headers : {
            'Accept' : 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;',
            'Content-Type' : 'text/plain;charset=UTF-8',
            'User-Agent' : 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.89 Safari/537.36',
            'Host' : 'www.vue-js.com',
        }
      })
      .then(function (response) {
        return response.json();
      })
      .then(function (body) {
        console.log(body);
        if (body.data.length > 0) {
          callback(body.data);
        } else {
          callback(rows, {
            allLoaded: true, // the end of the list is reached
          });
        }
      })
      .catch(function(ex) {
        console.log('parsing failed', ex)
      });

  }
  _renderRowView(rowData) {
    return (
      <TouchableHighlight
        underlayColor='#c8c7cc'
        onPress={
          () => this.props.navigator.push({
            component: Article,
            articleData:rowData,
          })
        }
        style = {[Styles.ListComponent]} >
        <View>
          <Text style = {[Styles.ListContentTitle]}>{ rowData.title }</Text>
          <Image
          style={{height: 160,marginVertical: 8}}
          resizeMode='contain'
          source={{uri: 'http://pic1.win4000.com/wallpaper/4/510f446941311.jpg'}}
          />
          <View style={[{flexDirection: 'row'}, {alignItems: 'center'}]}>
            <View>
              <Image
              style={{height: 28,width: 28, borderRadius: 14}}
              source={{uri: rowData.author.avatar_url}}
              />
            </View>
            <View style={{marginLeft: 8}}>
              <Text style={{fontSize: 14, color: 'rgb(154, 154, 154)'}}>{ rowData.author.loginname }</Text>
            </View>
            <View style={{marginLeft: 16}}>
              <MaterialIcons name="av-timer" size={20} color={'rgb(154, 154, 154)'} />
            </View>
            <View style={{marginLeft: 4}}>
              <Text style={{fontSize: 14, color: 'rgb(154, 154, 154)'}}>{ rowData.create_at }</Text>
            </View>
          </View>

        </View>
      </TouchableHighlight>
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
    )
  }
  _renderPaginationAllLoadedView() {

  }
	render() {

    return (
      <GiftedListView
          rowView={this._renderRowView.bind(this)}
          onFetch={this._onFetch.bind(this)}
          firstLoader={true}
          initialListSize={5}
          pagination={true}
          refreshable={true}
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


export default ArticleListItem;
