import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity
} from 'react-native';
import React, { Component } from 'react';
import { Icon } from 'react-native-elements';
import { CardBoard } from '../components/CardBoard.js';
import { Sets } from '../components/Sets.js';
import { StackNavigator, NavigationActions} from 'react-navigation';

export default class GameScreen extends Component {
    render() {
      const {state} = this.props.navigation;
      var levelChosen = state.params.levelName;


      console.log("This is level for Sets: " + levelChosen);
        return (
          <View style={styles.container}>

            <TouchableOpacity style={styles.homeButton} onPress={() => this.props.navigation.dispatch(NavigationActions.back())}>
                <Icon  name='chevron-left' color='#ea4d57' size={35}/>
            </TouchableOpacity>

            <Sets levelName={levelChosen} />
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
