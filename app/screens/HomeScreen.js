import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Picker,
    ImageBackground,
    AsyncStorage
} from 'react-native';
import { Icon, Button } from 'react-native-elements';
import { StackNavigator } from 'react-navigation';
import Modal from 'react-native-modalbox';
import { Sets } from '../components/Sets.js';

export let finalScores = [];

export default class HomeScreen extends Component {
  constructor (props) {
	   super(props);
		 this.state = {
		     level: 'Medium',
         isOpen: false,
         isDisabled: false,
		 }
    this.getData = this.getData.bind(this);
	}

  async getData () {
    let response = await AsyncStorage.getItem('userScore');
    finalScores = await JSON.parse(response) || [];
  }

  render() {

    return(
      <ImageBackground source = {require('../../src/images/back.png')} style={styles.backgroundImage}>
        <View style = {styles.body}>
          <View style = {styles.pickerBox}>
            <Text style = {styles.levelText}> Select Level: </Text>
              <Picker
                itemStyle = {{color:'white'}}
                mode = "dropdown"
                selectedValue = {this.state.level}
                onValueChange = {itemValue => this.setState({level: itemValue})}>
                  <Picker.Item label = 'Easy' value = 'Easy'/>
                  <Picker.Item label = 'Medium' value = 'Medium'/>
                  <Picker.Item label = 'Hard' value = 'Hard'/>
              </Picker>
					</View>

					<View style = {styles.buttonBox}>
          	<Button
            	icon = {{name: 'play', type: 'evilicon', size: 35}}
            	buttonStyle = {{backgroundColor: "#FC5D65", borderRadius: 15, padding:15, marginTop: 10}}
            	textStyle = {{textAlign: 'center', fontSize:16}}
            	title = {`PLAY`}
            	onPress = { () => this.props.navigation.navigate('GameScreen', {levelName: this.state.level} )}
          	/>
					</View>
        </View>

        <Modal style = {styles.modal} position = {"center"} ref = {"modal3"} isDisabled = {this.state.isDisabled} isOpen = {this.state.isOpen}>
          <View style = {styles.topModalBox}>
            <Text style = {styles.helloText}> Welcome to Memory Challenge </Text>
            <Text style = {styles.text}>
              Remeber the position of the images and their pairs in order to find them when they become invisible!
            </Text>
          </View>
          <TouchableOpacity style = {styles.closeModalButton} onPress = { () => this.refs.modal3.close()}>
            <Text style = {{fontSize:20, color:'white'}}> Got it! </Text>
          </TouchableOpacity>
        </Modal>

        <View style={styles.tabBar}>
          <TouchableOpacity style = {styles.tabItem} onPress={ () => this.refs.modal3.open()} style={styles.btn}>
          <Icon name = 'info' color = '#ea4d57' size = {30}/>
            <Text style={styles.tabText}> Info </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tabItem} onPress={ () => {

            this.getData();
            this.props.navigation.navigate('ScoreScreen');

          }}>
          <Icon name = 'trophy' type = 'evilicon' color = '#ea4d57' size={30}/>
              <Text style={styles.tabText}> Scores </Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
		);
	}
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: null,
    height: null
  },
  body: {
    flex:1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  topModalBox: {
    flex:1,
  },
  text: {
    color: 'black',
    fontSize: 18,
    alignSelf: 'center',
    justifyContent:'center',
    marginTop:30,
    marginLeft:10,
    marginRight:10,
  },
  closeModalButton: {
    marginBottom:40,
    backgroundColor: '#ea4d57',
    padding:8,
    flexDirection: 'row',
    borderRadius: 8
  },
	helloText: {
		fontSize: 22,
		textAlign: 'center',
    color: '#FC5D65',
		fontWeight: 'bold',
    marginTop:20
	},
  body: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10
  },
	pickerBox: {
    marginTop: 10,
    flex:1,
	},
	levelText: {
		color: '#FC5D65',
		fontSize: 20,
		marginTop:100,
		fontWeight: 'bold'
	},
	buttonBox: {
    flex:1,
    marginTop: 90,
	},
  tabBar: {
    height: 50,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'rgba(52, 52, 52, 0.95)'
  },
  tabItem: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: "row",
  },
  tabText: {
    color: '#ea4d57'
  },
  modal: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 300,
    width: 300,
    borderRadius: 25,
    shadowRadius: 10,
  }
});
