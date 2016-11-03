import React, {
    Component
} from 'react';
import {
    View,
    Text,
    Navigator,
    StyleSheet,
} from 'react-native';


import NavigationBar from 'react-native-navbar';
import Styles from '../style/style.js';
import InitialScreen from './myinfo.js';



const styles = StyleSheet.create(Styles);

function renderScene(route, navigator) {
    return <route.component route = {
        route
    }
    navigator = {
        navigator
    }
    />;
}

class My extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'My';
    }

    render() {
        const initialRoute = {
            component: InitialScreen,
        };
        return (
          <View style = {
                [styles.container]
            } >
            <Navigator initialRoute = {
                initialRoute
            }
              renderScene = {
                  renderScene
              }
            />
        </View>
        )
    }
}

export default My;
