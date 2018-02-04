import React, { Component } from 'react';
import { AppRegistry, FlatList, StyleSheet, Text, View } from 'react-native';

export default class ScoreScreen extends Component {

  constructor(props){
    super(props);
    this.state = {}
  }


  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.topText}>Your Scores:</Text>
        <FlatList
          data={[
            {key: 'Devin', level: 'Hard'},
            {key: 'Jackson', level: 'Hard'},
            {key: 'James', level: 'Hard'},
            {key: 'Joel', level: 'Hard'},
            {key: 'John', level: 'Hard'},
            {key: 'Jillian', level: 'Hard'},
            {key: 'Jimmy', level: 'Hard'},
            {key: 'Julie', level: 'Hard'},
          ]}
          renderItem={({item}) => <Text style={styles.item}>{item.key} {item.level}</Text>}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22,
   backgroundColor: 'white'
  },
  topText: {
    alignSelf: 'center',
    fontSize: 18,
    color: '#ea4d57'
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
})

// skip this line if using Create React Native App
AppRegistry.registerComponent('AwesomeProject', () => FlatListBasics);
