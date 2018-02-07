import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    Picker,
    ImageBackground,
		Item
} from 'react-native';
import { Icon } from 'react-native-elements';
import { Button, Header } from 'react-native-elements';
import { Sets } from '../components/Sets.js';
import { StackNavigator } from 'react-navigation';


/*/*import { Dropdown } from 'react-native-material-dropdown';*/

let pickedLevel = '';

class HomeScreen extends Component {
	constructor(props){
		super(props);
		this.state = {
			level: 'Medium'
		}
	}

    render() {

    pickedLevel = this.state.level;

    console.log("this is the level from home " + pickedLevel);

      return(

        <ImageBackground source={require('../../src/images/back.png')} style={styles.backgroundImage}>

        <View style={styles.body}>

          <View style={styles.pickerBox}>
            <Text style={styles.levelText}>Select Level:</Text>
            <Picker
              itemStyle = {{color:'white'}}
              mode="dropdown"
              selectedValue={this.state.level}
              onValueChange={(itemValue, itemIndex) => this.setState({level: itemValue})}>
              <Picker.Item label='Easy' value='Easy' style={{color:'red'}}/>
              <Picker.Item label='Medium' value='Medium'/>
              <Picker.Item label='Hard' value='Hard'/>
            </Picker>
					</View>

					<View style={styles.buttonBox}>
          	<Button
            	icon={{name: 'play', type: 'evilicon', size: 35}}
            	buttonStyle={{backgroundColor: "#FC5D65", borderRadius: 15, padding:15, marginTop: 10}}
            	textStyle={{textAlign: 'center', fontSize:16}}
            	title={`PLAY`}
            	onPress={()=>this.props.navigation.navigate('GameScreen', {levelName: this.state.level} )}
          	/>
					</View>

        </View>

        <View style={styles.tabBar}>
          <TouchableOpacity style={styles.tabItem}>
              <Icon name='home' color='#ea4d57' size={30}/>
              <Text style={styles.tabText}>Home</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tabItem} onPress={()=>this.props.navigation.navigate('ScoreScreen')}>
              <Icon name='trophy'
              type='evilicon'
              color='#ea4d57' size={30}/>
              <Text style={styles.tabText}>Scores</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.tabItem}>
              <Icon name='gear'
              type='evilicon'
              color='#ea4d57' size={30}/>
              <Text style={styles.tabText}>Settings</Text>
          </TouchableOpacity>
        </View>

  </ImageBackground>

		);

	}
}

console.log("This is the level outside " + pickedLevel);

export default HomeScreen;

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
/*		helloText: {
			fontSize: 22,
			textAlign: 'center',
      color: '#50CEB4',
      marginTop: 10,
			marginBottom: 10,
			fontWeight: 'bold'
		},*/
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
      height: 45,
      width: '100%',
    /*borderTopWidth: 0.5,
      borderColor: "#E5E5E5",*/
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      backgroundColor: 'rgba(52, 52, 52, 0.95)'
    },
    tabItem: {
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: "row"
    },
    tabText: {
      color: '#ea4d57'
    },
});
