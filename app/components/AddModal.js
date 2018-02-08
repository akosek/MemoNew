import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
		Item,
    Dimensions,
    TextInput,
    TouchableOpacity,
    AsyncStorage
} from 'react-native';
import { Icon } from 'react-native-elements';
import { Sets } from '../components/Sets.js';
import { StackNavigator} from 'react-navigation';
import Modal from 'react-native-modalbox';
import Button from 'react-native-button';
import {HomeScreen} from '../screens/ScoreScreen.js';
import {ScoreScreen} from '../screens/ScoreScreen.js';
import {scoreDisplay} from './CardBoard.js';

export class AddModal extends Component {
  constructor(props){
    super(props);
    this.state = {
      userName: ' ',

    };
    this.saveData = this.saveData.bind(this);
  }

  showModal = () => {
    this.refs.myModal.open();
  }

  async saveData(name) {

    //AsyncStorage.clear();
    let response = await AsyncStorage.getItem("userScore");
    let data = await JSON.parse(response) || [];

     finalScores = data.concat({levelData: this.props.level, scoreData: this.props.userTime, key: data.length+1, userName:name});

    //console.log(finalScores);
    await AsyncStorage.setItem("userScore", JSON.stringify(finalScores));

    }



  render(){

    return (
      <Modal
        ref={"myModal"}
        style= {{
          justifyContent: 'center',
          borderRadius: 25,
          width:300,
          shadowRadius: 10,
          height:350
        }}
        backdrop = {true}
        /*onClosed = {()=>{
          alert("Modal Closed");
        }}*/
        >
        <View style={{justifyContent:'center', alignItems:'center'}}>
        <Text style={styles.topText}>
          Your score:</Text>
          <Text style={styles.scoreText}>{scoreDisplay}</Text>
        </View>
        <TextInput style={styles.inputStyle}
          onChangeText={(text)=> this.setState({userName: text})}
          placeholder="Enter your name"
        //  value={this.state.userName}
        />
        <Button style={{fontSize:18, color:'white'}}
          containerStyle={{
            padding:6,
            marginLeft: 100,
            marginRight:100,
            height:40,
            borderRadius: 10,
            backgroundColor: '#FC5D65'
          }}
          onPress={()=>{
            const newUser = {
              key: ' ',
              userName: this.state.userName,
              userTime: scoreDisplay,
              userLevel : this.props.level
            };
          //  console.log(newUser);

            this.saveData(this.state.userName);


            this.refs.myModal.close();
          }}>
          Save
        </Button>

        <View style={styles.tabBox}>
          <TouchableOpacity onPress={() => {navigate('HomeScreen')}}>
            <Icon name='home'
            color='#ea4d57' size={30}/>
            <Text style={styles.tabText}> Home</Text>
          </TouchableOpacity>
            <TouchableOpacity style={styles.tabItem} >
                <Icon name='trophy'
                type='evilicon'
                color='#ea4d57' size={30}/>
                <Text style={styles.tabText}>Scores</Text>
            </TouchableOpacity>
          </View>

      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  topText: {
    alignItems:'center',
    fontSize: 25,
    justifyContent:'center',
    marginTop:10
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
    marginTop:30,
    borderBottomWidth: 1
  },
  tabBox: {
    flexDirection: 'row',
    flex:1,
    width:'100%',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop:20
  },
  tabText: {
    color: '#ea4d57',
    fontSize: 15
  }

});
