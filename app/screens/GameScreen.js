
import {
    StyleSheet,
    Text,
    View
} from 'react-native';
import React, { Component } from 'react';
import { CardBoard } from '../components/CardBoard.js';
import { Sets } from '../components/Sets.js';
import { StackNavigator } from 'react-navigation';

export default class GameScreen extends Component {
    render() {
      const {state} = this.props.navigation;
      var levelChosen = state.params.levelName;

      console.log("This is level for Sets: " + levelChosen);
        return (
          <View style={styles.container}>
            <Sets levelName={levelChosen} />
					</View>
        );
    }
}


const styles = StyleSheet.create({
  container: {
    flex:1
  }
});
