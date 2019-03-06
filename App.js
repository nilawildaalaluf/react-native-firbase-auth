/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import { StyleSheet,View} from 'react-native';
import firebase from 'react-native-firebase';
import AppContainer from './routing';


export default class App extends Component {
  
  render() {
    firebase.analytics().setCurrentScreen('App');
    firebase.analytics().logEvent('openApp');
    return (
      <View style={styles.container}>
        <AppContainer/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1ABC9C',
    flexDirection: 'column'
  }
  
});
