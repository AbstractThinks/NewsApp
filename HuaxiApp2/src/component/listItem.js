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

class ArticleListItem extends React.Component {
  constructor(props) {
    super(props);

  }
  _onFetch(page = 1, callback, options) {
      fetch("http://localhost:3000/huxiuser/getarticles", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        body: "page=" + (page-1)
      }).then(function(response) {

        return response.json()

      }).then(function(json) {
        if (json.data.allowLoad) {
          callback(json.data.articles);

        } else {
          callback(json.data.articles, {
              allLoaded: true, // the end of the list is reached
          });
        }
      }).catch(function(ex) {
        console.log('parsing failed', ex)
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
                articleData:rowData,
              })
          }
          style = {[Styles.ListComponent]}>
          <View>
              <Text style = {[Styles.ListContentTitle]}> {rowData.title}</Text> 
              <Image
                style={{height: 160,marginVertical: 8}}
                resizeMode='contain'
                source={{uri: 'http://pic1.win4000.com/wallpaper/4/510f446941311.jpg'}}
              />
              <View style={[{flexDirection: 'row'}, {alignItems: 'center'}]}>
                <View>
                  <Image
                    style={{height: 28,width: 28, borderRadius: 14}}
                    source={{uri: 'http://pic1.win4000.com/wallpaper/4/510f446941311.jpg'}}
                  />
                </View>
                <View style={{marginLeft: 8}}>
                  <Text style={{fontSize: 14, color: 'rgb(154, 154, 154)'}}>{rowData.author}</Text>
                </View>
                <View style={{marginLeft: 16}}>
                  <MaterialIcons name="av-timer" size={20} color={'rgb(154, 154, 154)'} />
                </View>
                <View style={{marginLeft: 4}}>
                  <Text style={{fontSize: 14, color: 'rgb(154, 154, 154)'}}>{rowData.time}</Text>
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