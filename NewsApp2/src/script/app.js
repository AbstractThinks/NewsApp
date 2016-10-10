import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'



class App extends Component {
  
  render () {
    return (
      <View style={[styles.container]}>
      	<Text>测试</Text>
      </View>
    )
  }
    
}
var styles = StyleSheet.create({

	container: {
	    flex: 1,
	    backgroundColor : "white"
	},
})

export default App