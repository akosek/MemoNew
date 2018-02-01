import React, {Component} from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { StackNavigator } from 'react-navigation';
//import { Card } from './app/components/Card';
import HomeScreen from './app/screens/HomeScreen';
import GameScreen from './app/screens/GameScreen';


export default class App extends Component <{}> {
  render() {
    return (
        <NavigationApp />
    );
  }
}

const NavigationApp = StackNavigator({
    HomeScreen: { screen: HomeScreen },
    GameScreen: { screen: GameScreen }
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
