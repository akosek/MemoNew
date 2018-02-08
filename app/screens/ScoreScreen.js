import React, { Component } from 'react';
import { AppRegistry, FlatList, List, StyleSheet, Text, View, TouchableOpacity, AsyncStorage, SectionList } from 'react-native';
import { Icon } from 'react-native-elements';
import { finalScores } from './HomeScreen.js';
import { CardBoard } from '../components/CardBoard.js';
import { StackNavigator, NavigationActions } from 'react-navigation';

let data = [];

export default class ScoreScreen extends Component {

  constructor(props){
    super(props);

  }

  render() {

    displayData = async () => {
      let response = await AsyncStorage.getItem("userScore");
      data = await JSON.parse(response) || [];
      console.log(data);
    }

    displayData();
  //  console.log(finalScores);

    return (
      <View style={styles.container}>
        <View style={styles.navScore}>
          <TouchableOpacity style={styles.backButton} onPress={() => this.props.navigation.dispatch(NavigationActions.back())}>
              <Icon name='chevron-left' color='#ea4d57' size={35}/>
          </TouchableOpacity>
          <Text style={styles.topText}>Your Scores:</Text>
        </View>

        <View style={styles.scoreBody}>

          <FlatList
            data={data}
            renderItem={({item}) => <Text style={styles.item}>{item.key} {item.userName} {item.levelData} {item.scoreData}</Text>}
          />

      </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22,
   backgroundColor: 'white',
  },
  navScore: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  topText: {
    justifyContent: 'center',
    flexDirection: 'row',
    fontSize: 18,
    color: '#ea4d57'
  },
  backButton: {
    flexDirection: 'row',
    left: 0,
    justifyContent: 'flex-start',
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
})

// skip this line if using Create React Native App
//AppRegistry.registerComponent('AwesomeProject', () => FlatListBasics);
