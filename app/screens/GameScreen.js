import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    TouchableOpacity
} from 'react-native';
import { Icon } from 'react-native-elements';
import { Sets } from '../components/Sets.js';
import { NavigationActions} from 'react-navigation';

export default class GameScreen extends Component {

  render() {

    const {state} = this.props.navigation;
    var levelChosen = state.params.levelName;

    return (
      <View style={styles.container}>
        <TouchableOpacity style = {styles.homeButton} onPress = { ( ) => this.props.navigation.dispatch(NavigationActions.back())}>
          <Icon name = 'chevron-left' color = '#ea4d57' size = {35}/>
        </TouchableOpacity>
      <Sets levelName = {levelChosen} />
		</View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1
  },
  homeButton: {
    flexDirection: 'row',
    left: 0,
    justifyContent: 'flex-start',
    paddingTop:10
  }
});
