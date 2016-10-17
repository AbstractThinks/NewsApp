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
import MyListItem from './listItemMy.js';
import MyListItemDollar from './listItemMyDollar.js';

const styles = StyleSheet.create(Styles);
class InitialScreen extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'InitialScreen'; 
        // this.state.listComponent = <MyListItem />
        this.state = {
          listButtonColor : "red",
          dollarButtonColor : "rgb(110, 110, 110)",
          listComponent : <MyListItem navigator={this.props.navigator}/>,
        }
        
    }
        
    _handMyDollar() {
      this.setState({
        listComponent : <MyListItemDollar navigator={this.props.navigator}/>,
        listButtonColor : 'rgb(110, 110, 110)',
        dollarButtonColor : 'red'
      })
    }
    _handMyList() {
      this.setState({
        listComponent : <MyListItem navigator={this.props.navigator}/>,
        listButtonColor : 'red',
        dollarButtonColor : 'rgb(110, 110, 110)'
      })
    }
    render() {

      const titleConfig = {
          title: '我',
          tintColor: Styles.ThemeColor.color,
      };
       return (
	      <View style={[styles.container,]}>
          <NavigationBar
          title={titleConfig}
          tintColor={Styles.ThemeBackColor.color}
          />
          <View style={[styles.container]}>
            <View style={{
                  flexDirection: 'row', 
                  backgroundColor: Styles.ThemeBackColor.color,
                  paddingLeft: 30,paddingRight: 30,
                  paddingTop: 36, paddingBottom: 36}}>
                  <View>
                    <Image
                          style={{height: 70,width: 70, borderRadius: 35}}
                          source={{uri: 'http://pic1.win4000.com/wallpaper/4/510f446941311.jpg'}}
                        />
                   
                  </View>
                  <View style={{marginLeft: 30}}>
                    <View style={{marginTop: 15}}>
                      <Text style={{color:Styles.ThemeColor.color}}>
                        张美娜
                      </Text>
                    </View>
                    <View style={{marginTop: 15}}>
                      <Text style={{color:Styles.ThemeColor.color}}>
                        余额：842.00元
                      </Text>
                    </View>
                  </View>

            </View>
            <View style={{flexDirection: 'row',backgroundColor: 'white'}}>
              <View style={{flex: 1, flexDirection: 'row',justifyContent: 'center',alignSelf: 'center'}}>
                <TouchableHighlight
                underlayColor = '#c8c7cc'
                style={{flex: 1, flexDirection: 'row',justifyContent: 'center',alignSelf: 'center',paddingTop: 20, paddingBottom: 20}}
                onPress = {
                    this._handMyList.bind(this)
                }>
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
                underlayColor = '#c8c7cc'
                style={{flex: 1, flexDirection: 'row',justifyContent: 'center',alignSelf: 'center',paddingTop: 20, paddingBottom: 20}}
                onPress = {
                    this._handMyDollar.bind(this)
                }>
                  <Text style={{color: this.state.dollarButtonColor}}>
                    资金流水
                  </Text>
                </TouchableHighlight>
              </View>
            </View>
            { this.state.listComponent }   
            
          </View>
        </View>

	    );
		
    }
}

export default InitialScreen;