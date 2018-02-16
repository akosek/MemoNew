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
      data.reverse();

      for(var i=0; i < data.length; i++) {
        data[i].minutes = Math.floor(data[i].scoreData / 60);
        data[i].seconds = (data[i].scoreData - data[i].minutes * 60).toFixed(2);
        }
    }

    displayData();

    return (
      <View style={styles.container}>
        <View style={styles.navScore}>
          <TouchableOpacity style={styles.backButton} onPress={() => this.props.navigation.dispatch(NavigationActions.back())}>
              <Icon name='chevron-left' color='#ea4d57' size={35}/>
          </TouchableOpacity>
          <Text style={styles.topText}>Your Scores:</Text>
        </View>

        <View style={styles.scoreBody}>

          <View style= {styles.topRow}>
            <Text style={styles.rowName}>Name</Text>
            <Text style={styles.rowName}>Level</Text>
            <Text style={styles.rowName}>Time</Text>
            <Text style={styles.rowName}>Taps</Text>
          </View>

          <FlatList
            data={data}
            numColumns={1}
            keyExtractor={(item, index) => item.key }
            renderItem={({item}) =>

            <View style={styles.itemBox }>
              <Text style={styles.dataItem}>{ item.userName }</Text>
              <Text style={styles.dataItem}>{ item.levelData }</Text>
              <Text style={styles.dataItem}>{ item.minutes }:{item.seconds}</Text>
              <Text style={styles.dataItem}>{ item.tapCount }</Text>
            </View>
            }
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
   backgroundColor: 'black',
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
    color: 'white'
  },
  backButton: {
    flexDirection: 'row',
    left: 0,
    justifyContent: 'flex-start',
  },
  topRow: {
    flexDirection:'row',
    justifyContent:'space-around',
    alignItems: 'center',
    marginBottom: 10
  },
  rowName: {
    fontSize:20,
    color:'#ea4d57',
    textAlign: 'left'
  },
  itemBox: {
    flexDirection: 'row',
    flex:1,
    marginLeft:25,
  },
  dataItem: {
    flex:1,
    color: 'white',
    justifyContent: 'flex-end',
    flexDirection: 'row',
    fontSize: 15,
    textAlign: 'left'
  },
})
