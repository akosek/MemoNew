import React, {Component} from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  AppRegistry
} from 'react-native';
import { Icon } from 'react-native-elements';
import { StackNavigator } from 'react-navigation';
import HomeScreen from './app/screens/HomeScreen';
import GameScreen from './app/screens/GameScreen';
import ScoreScreen from './app/screens/ScoreScreen';

class App extends Component <{}> {
  constructor(props){
    super(props);
  }

  render() {
    return (
        <NavigationApp />
    );
  }
}

const NavigationApp = StackNavigator({
  HomeScreen: {
    screen: HomeScreen,
    navigationOptions:{
      title: 'Home',
      headerTitleStyle: {alignSelf: 'center'},
      headerTitleStyle:{ color: '#FC5D65'},
      backgroundColor: 'black',
    }
  },
  GameScreen: {screen: GameScreen },
  ScoreScreen: { screen: ScoreScreen }
  },
  {
    mode: 'card',
    cardStyle: { backgroundColor: 'transparent' },
    tintColor: '#ffffff',
    headerMode: 'none'
  });

export default App;
