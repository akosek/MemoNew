import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    Picker,
		Item
} from 'react-native';
import { Icon } from 'react-native-elements';
import { Button, Header } from 'react-native-elements';
import { Sets } from '../components/Sets.js';

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

      /*  <View>
          <Header
            leftComponent={{ icon: 'menu', color: '#fff' }}
            centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
            rightComponent={{ icon: 'home', color: '#fff' }}
          />
        </View>*/
        <View style={styles.container}>

          <View style={styles.navBar}>
            <Text style={styles.helloText}>Welcome to Memory Chalange</Text>
          </View>

        <View style={styles.body}>
          <Image source={require('../../src/images/brain.png')} style={{height: 160, width:160}} />

					<View style={styles.pickerBox}>
            <Text style={styles.levelText}>Selected Level: {this.state.level}</Text>
            <Picker
              selectedValue={this.state.level}
              onValueChange={(itemValue, itemIndex) => this.setState({level: itemValue})}>
              <Picker.Item label='Easy' value='Easy'/>
              <Picker.Item label='Medium' value='Medium'/>
              <Picker.Item label='Hard' value='Hard'/>
            </Picker>


					</View>

					<View style={styles.buttonBox}>
          	<Button
            	icon={{name: 'play', type: 'evilicon', size: 35}}
            	buttonStyle={{backgroundColor: "#FC5D65", borderRadius: 15, padding:15}}
            	textStyle={{textAlign: 'center'}}
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
            <TouchableOpacity style={styles.tabItem}>
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

        </View>


		);

	}
}

console.log("This is the level outside " + pickedLevel);

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    navBar: {
      marginBottom: 10
    },
		helloText: {
			fontSize: 22,
			textAlign: 'center',
      color: '#50CEB4',
      marginTop: 10,
			marginBottom: 10,
			fontWeight: 'bold'
		},
		buttonPlay:{
			fontSize: 40,
			backgroundColor: '#000',
		},
    body: {
      flex:2,
      backgroundColor: 'white',
      alignItems: 'center',
    },
		pickerBox: {
			flex: 1,
			marginBottom: 90,
		},
		pickerStyle: {
			top:10,
			maxHeight: 10,
			borderColor: '#FC5D65',
		},
		levelText: {
			color: '#FC5D65',
			fontSize: 18,
			marginTop:10,
			fontWeight: 'bold'
		},
		buttonBox: {
			flex:1,
			marginTop:20
		},
    tabBar: {
      backgroundColor: 'white',
      height: 50,
      borderTopWidth: 0.5,
      borderColor: "#E5E5E5",
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
    },
    tabItem: {
      alignItems: 'center',
      justifyContent: 'center',
    },
    tabText: {
      color: '#ea4d57'
    },
    dropdownView: {
      flexDirection: 'row',
      marginBottom: 50,
      alignItems:'center',
    }
});
