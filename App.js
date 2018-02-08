import React, {Component} from 'react';
import {
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { Icon } from 'react-native-elements';
import { StackNavigator } from 'react-navigation';
import { TabNavigator } from 'react-navigation';
import HomeScreen from './app/screens/HomeScreen';
import GameScreen from './app/screens/GameScreen';
import ScoreScreen from './app/screens/ScoreScreen';

export default class App extends Component <{}> {
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
      headerRight:
        <TouchableOpacity >
            <Icon name='trophy' type='evilicon' color='#ea4d57' size={30}/>
        </TouchableOpacity>,
      backgroundColor: 'black',
    }
  },
  GameScreen: {
    screen: GameScreen,
    navigationOptions: {
      title: 'Game',
      headerTitleStyle: {alignSelf: 'center'},
    }
  },
  ScoreScreen: { screen: ScoreScreen }
  },
  {
    mode: 'card',
    cardStyle: { backgroundColor: 'transparent' },
    tintColor: '#ffffff',
    headerMode: 'none'
  });

const styles = StyleSheet.create ({
  tabItem: {
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: "row",
    marginRight: 10,
  },
});
