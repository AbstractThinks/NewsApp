import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableHighlight,
  Image,
  StyleSheet,
  AlertIOS,
} from 'react-native';
import NavigationBar from 'react-native-navbar';
import GiftedListView from 'react-native-gifted-listview';
import { SocialIcon } from 'react-native-elements'


import Styles from '../style/style.js';
import Article from './article.js';
import MyBuyListItem from './mybuy.js';
import MyFoundsListItem from './myfounds.js';

const styles = StyleSheet.create(Styles);
class InitialScreen extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'InitialScreen';
        // this.state.listComponent = <MyBuyListItem />
        this.state = {
          username:"",
          userid:"",
          userbalance:"",
          avatar_url: "../img/tx.jpg",
          buyid: "",
          balanceid: "",
          listButtonColor : "red",
          dollarButtonColor : "rgb(110, 110, 110)",
        }
        // this._onFetch();
        // this.state.listComponent = <MyBuyListItem navigator={this.props.navigator} buyData={this.state.buyid} />

    }
    componentWillMount() {
      this._onFetch()
    }
    _onFetch() {
      var that = this;
      fetch("http://www.vue-js.com/api/v1/user/emobossemo", {
        method : 'GET',
        headers : {
            'Accept' : 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;',
            'Content-Type' : 'text/plain;charset=UTF-8',
            'User-Agent' : 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.89 Safari/537.36',
            'Host' : 'www.vue-js.com',
        }
      }).then(function(response) {
        return response.json()
      })
      .then(function(json) {
        that.setState({
          "username":json.data.loginname,
          "userid":json.data.id,
          "avatar_url": json.data.avatar_url,
          "userbalance":json.data.score,
          "buyid":json.data.recent_replies,
          "balanceid":json.data.collect_topics,
          "listComponent": <MyBuyListItem navigator={that.props.navigator} buyData={json.data.recent_replies} />
        });
      }).catch(function(ex) {
        console.log('parsing failed', ex)
      });

    }
    _handMyDollar() {
      this.setState({
        listComponent : <MyFoundsListItem navigator={this.props.navigator} foundsData={this.state.balanceid}/>,
        listButtonColor : 'rgb(110, 110, 110)',
        dollarButtonColor : 'red'
      })
    }
    _handMyList() {
      this.setState({
        listComponent : <MyBuyListItem navigator={this.props.navigator} buyData={this.state.buyid}/>,
        listButtonColor : 'red',
        dollarButtonColor : 'rgb(110, 110, 110)'
      })
    }
    render() {

      const titleConfig = {
          title: '我',
          tintColor: Styles.ThemeTextColor.backgroundColor,
      };
      return (
        <View style={[styles.container,]}>
          <NavigationBar
              title={titleConfig}
              tintColor={Styles.ThemeColor.backgroundColor}
              />
          <View style={[styles.container]}>
            <View style={[{height: 140}]}>
                <Image source={require('../img/picpng.png')}
                  style={{height: 140, position:"absolute"}} >
                </Image>
                <View style={{
                  flexDirection: 'row',
                  paddingLeft: 30,paddingRight: 30,
                  paddingTop: 36, paddingBottom: 36}}>
                  <Image style={{height: 70,width: 70, borderRadius: 35}}
                  source={{uri: this.state.avatar_url}}
                  />
                  <View style={{marginLeft: 30}}>
                    <View style={{marginTop: 12}}>
                      <Text style={{color:'#ffffff',backgroundColor:"rgba(0,0,0,0)", fontSize:16}}>
                        { this.state.username }
                      </Text>
                    </View>
                    <View style={{marginTop: 12}}>
                      <Text style={{color:'#ffffff',backgroundColor:"rgba(0,0,0,0)", fontSize:16}}>
                      余额：{ this.state.userbalance } 元
                      </Text>
                    </View>
                  </View>
                </View>
            </View>

            <View style={{flexDirection: 'row',backgroundColor: 'white'}}>
              <View style={{flex: 1, flexDirection: 'row',justifyContent: 'center',alignSelf: 'center'}}>
                <TouchableHighlight
                  onPress = {
                      this._handMyList.bind(this)
                  }
                underlayColor = '#c8c7cc'
                style={{flex: 1, flexDirection: 'row',justifyContent: 'center',alignSelf: 'center',paddingTop: 20, paddingBottom: 20}}>
                  <Text style={{color: this.state.listButtonColor}}>
                    已购文章
                  </Text>
                </TouchableHighlight>
              </View>
              <View style={{alignSelf: 'center'}}>
                <Text>
                  |
                </Text>
              </View>
              <View style={{flex: 1, flexDirection: 'row',justifyContent: 'center'}}>
                <TouchableHighlight
                  onPress = {
                      this._handMyDollar.bind(this)
                  }
                  underlayColor = '#c8c7cc'
                  style={{flex: 1, flexDirection: 'row',justifyContent: 'center',alignSelf: 'center',paddingTop: 20, paddingBottom: 20}}>
                  <Text style={{color: this.state.dollarButtonColor}}>
                    资金流水
                  </Text>
                </TouchableHighlight>
              </View>
            </View>
            { this.state.listComponent }
          </View>
        </View>
      )

    }
}

export default InitialScreen;
