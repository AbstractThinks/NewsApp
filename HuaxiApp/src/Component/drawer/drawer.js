import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableHighlight,
} from 'react-native';

import Drawer from 'react-native-drawer'

const drawerStyles = {
  drawer: { shadowColor: '#000000', shadowOpacity: 0.8, shadowRadius: 3},
  main: {paddingLeft: 3},
}

class NavDrawer extends React.Component {
	render(){
		return (
			<Drawer
              type="overlay"
              content={<View style={{ flex: 1, backgroundColor: '#ff9900', }} />}
              tapToClose={true}
              openDrawerOffset={0.2} // 20% gap on the right side of drawer
              panCloseMask={0.2}
              closedDrawerOffset={-3}
              styles={drawerStyles}
              tweenHandler={(ratio) => ({
                main: { opacity:(2-ratio)/2 }
              })}
              >
      		</Drawer>
		) 
	}
	
}


export default NavDrawer;