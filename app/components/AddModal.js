import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    AsyncStorage
} from 'react-native';
import { Icon } from 'react-native-elements';
import { StackNavigator, NavigationActions } from 'react-navigation';
import Modal from 'react-native-modalbox';
import Button from 'react-native-button';
import {GameScreen} from '../screens/GameScreen.js';
import {tmpMin, tmpSec} from './CardBoard.js';

export class AddModal extends Component {
  constructor(props){
    super(props);
    this.state = {userName: ' '};
    this.saveData = this.saveData.bind(this);
  }

  showModal = () => {
    this.refs.myModal.open();
  }

  async saveData(name) {
    //AsyncStorage.clear();
    let response = await AsyncStorage.getItem("userScore");
    let data = await JSON.parse(response) || [];

    finalScores = data.concat({levelData: this.props.level, scoreData: this.props.userTime, key: data.length+1, userName: name, tapCount: this.props.tapCount});
    //console.log(finalScores);
    await AsyncStorage.setItem("userScore", JSON.stringify(finalScores));
  }

  render(){
    return (
      <Modal
        ref = {"myModal"}
        style = {styles.modalStyle}
        backdrop = {true}>
        <View style={{justifyContent:'center', alignItems:'center'}}>
          <Text style={styles.topText}>Your time:</Text>
          <Text style={styles.scoreText}>{tmpMin}:{tmpSec}</Text>
        </View>
        <TextInput style = {styles.inputStyle}
          onChangeText = {(text)=> this.setState({userName: text})}
          placeholder = "Enter your name"/>
        <Button style = {{fontSize:18, color:'white'}}
          containerStyle = {styles.contStyle}
          onPress = { () =>{
            this.saveData(this.state.userName);
            this.refs.myModal.close();
          }}>
          Save
        </Button>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  topText: {
    alignItems:'center',
    fontSize: 25,
    justifyContent:'center',
    marginTop:3
  },
  contStyle: {
    padding:6,
    marginLeft: 100,
    marginRight:100,
    height:40,
    borderRadius: 10,
    backgroundColor: '#FC5D65'
  },
  modalStyle: {
    justifyContent: 'center',
    borderRadius: 25,
    width:300,
    shadowRadius: 10,
    height:250
  },
  scoreText: {
    fontSize:30,
    marginTop:10,
    color:'#FC5D65'
  },
  inputStyle: {
    height:40,
    borderBottomColor: 'grey',
    marginLeft: 30,
    marginRight: 30,
    marginBottom:30,
    marginTop:20,
    borderBottomWidth: 1
  },
  tabText: {
    color: '#ea4d57',
    fontSize: 15
  }
});
