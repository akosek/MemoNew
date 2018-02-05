import React, { Component } from 'react';
import { AppRegistry, FlatList, StyleSheet, Text, View, TouchableOpacity, AsyncStorage } from 'react-native';
import { Icon } from 'react-native-elements';
import { finalScores } from '../components/CardBoard.js';
import { CardBoard } from '../components/CardBoard.js';
import { StackNavigator, NavigationActions } from 'react-navigation';



export default class ScoreScreen extends Component {

  constructor(props){
    super(props);
    this.state = {

    }
  }

  render() {

    displayData = async () => {
      let response = await AsyncStorage.getItem("userScore");
      let data = await JSON.parse(response) || [];

  /*    console.log(data);*/
    }


const finalArray = [];

  showItems = () => {
    for(var i =0; i< finalScores.length; i++){
      let obj = {
        key: i,
        scoreNumber: finalScores[i]
      }
        finalArray.push(obj);
      }

      console.log(finalArray);
    }

    displayData();
    showItems();


    console.log("This is final scores from All the Games " + finalScores);

    return (
      <View style={styles.container}>

        <View style={styles.navScore}>
          <TouchableOpacity style={styles.backButton} onPress={() => this.props.navigation.dispatch(NavigationActions.back())}>
              <Icon  name='chevron-left' color='#ea4d57' size={35}/>
          </TouchableOpacity>
          <Text style={styles.topText}>Your Scores:</Text>
        </View>

        <View style={styles.scoreBody}>
        <FlatList
          data={finalArray}
          renderItem={({item}) => <Text style={styles.item}>{item.scoreNumber}</Text>}
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
AppRegistry.registerComponent('AwesomeProject', () => FlatListBasics);
