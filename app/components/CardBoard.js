import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
	Image,
  AsyncStorage,
  TouchableHighlight,
  Dimensions
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';
import { List, ListItem, Button } from 'react-native-elements';
import {ScoreScreen} from "../screens/ScoreScreen";
import AwesomeAlert from 'react-native-awesome-alerts';
import {Sets} from './Sets.js';
import { AddModal } from './AddModal.js';

let tapNum = false;
let tmpObject = {};
let timerHandle;
var star;
var currentTime;

// Count size for cards and board
var {height, width} = Dimensions.get('window');
console.log("height :" + height + ", width:" + width); /////////
var cardSize = width * 0.220;
var imageSize = cardSize * 0.5625;


export let userScores = {
};

export let scoreDisplay = '';

export class CardBoard extends React.Component {
  constructor(props){
     super(props);
     this.state = {cards: this.props.images, time: 0, showAlert: false};
     this.updateBoard = this.updateBoard.bind(this);
    // this.saveData = this.saveData.bind(this);
     this.addScore = this.addScore.bind(this);

   }

   addScore(){
     this.refs.addModal.showModal();
   };


   showAlert = () => {
     this.setState({
       showAlert: true
     });
   };

   hideAlert = () => {
     this.setState({
       showAlert: false
     });
   };


/*   async saveData(value) {

     //AsyncStorage.clear();
     let response = await AsyncStorage.getItem("userScore");
     let data = await JSON.parse(response) || [];

     finalScores = data.concat({levelData: this.props.level, scoreData: value, key: data.length+1});

     console.log(finalScores);
     await AsyncStorage.setItem("userScore", JSON.stringify(finalScores));

     }*/

   updateBoard(newPressed) {

     if(!tapNum){
         console.log('first tap');   ////////
         this.state.cards[newPressed].visible = true;
         this.state.cards[newPressed].clickable = false;
         tmpObject = this.state.cards[newPressed];
     }
     else{
       if(this.state.cards[newPressed].src == tmpObject.src){
         console.log('second tap: match');  //////
         this.state.cards[newPressed].visible = true;
         this.state.cards[newPressed].clickable = false;
         this.state.cards[newPressed].paired = true;
         tmpObject.paired = true;
       }
       else{
         console.log('second tap: no match'); ///////
         this.state.cards[newPressed].visible = true;
         for (var i in   this.state.cards) {
             this.state.cards[i].clickable = false;
         }

         setTimeout(function(){
           this.state.cards[newPressed].visible = false;
           tmpObject.visible = false;
           tmpObject.clickable = true;
           for (var i in this.state.cards) {
               if (!this.state.cards[i].paired)
                 this.state.cards[i].clickable = true;
           }
           this.setState({cards: this.state.cards});
         }.bind(this), 300);
       }
     }

     this.setState({cards: this.state.cards});
     var endGame = true;
     for (var i in this.state.cards) {
         if (!this.state.cards[i].paired)
           endGame = false;
     }

     if(endGame){
       var end = new Date().getTime();
       clearInterval(timerHandle);
       var totalTime = (end - start)/1000;
       this.setState({time: totalTime});
      
      // this.saveData(totalTime);
       scoreDisplay = JSON.stringify(totalTime);

       this.addScore();
      // this.showAlert();
      // alert("End Game: " + totalTime + " seconds");
     }

     tapNum = !tapNum;

   }

   componentDidMount () {

     for (var i in this.state.cards) {
           this.state.cards[i].clickable = true;
           this.state.cards[i].visible = false;
     }

     setTimeout(function(){
       this.setState({cards: this.state.cards});
       start = new Date().getTime();

       timerHandle = setInterval(function(){
         var now = new Date().getTime();
         currentTime = (now - start)/1000;
         this.setState({time: currentTime});
       }.bind(this),100);

     }.bind(this), 3000);
   }

   render() {

     //const { navigate } = this.props.navigation;

     const {showAlert} = this.state;

     console.log("Level from Sets! " + this.props.level);

      let pickedImages = this.state.cards.map((image,index) =>
           <Card key={index}
                 image={image.src}
                 id={image.id}
                 visible={image.visible}
                 clickable={image.clickable}
                 paired={image.paired}
                 onPress={this.updateBoard}/>
       );

      return (
         <View style={styles.container}>

           <View style={styles.topGameBar}>
           <View style={styles.timerBox}>
             <Icon name='clock'
             type='evilicon'
             color='#ea4d57' size={33}/>
             <Text style={styles.timerText}>: {this.state.time}</Text>
           </View>
         </View>

           <View style={styles.cardBox}>
              <Text>{pickedImages}</Text>
           </View>

           <AddModal ref={'addModal'} parentBoardCard={this} level={this.props.level} userTime={this.state.time}>
           </AddModal>



         </View>
       );
   }
 }

class Card extends React.Component {
    constructor(props){
      super(props);
      this.toogleCard = this.toogleCard.bind(this);
      }

    toogleCard(){
      if (this.props.clickable)
        this.props.onPress(this.props.id);
    }

    render() {
      return (
        <TouchableHighlight style={styles.imageContainer} onPress={this.toogleCard}>
          <Text style={this.props.visible ? styles.imageStyle: styles.imageHide}> {this.props.image} </Text>
        </TouchableHighlight>

      );
    }
}


const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems: 'center',
    justifyContent : 'center',
    backgroundColor: 'black',
    height: '100%'
  },
  timerBox: {
    flexDirection: 'row',
    marginTop:0,
    alignItems: 'flex-start',
    justifyContent : 'center',
  },
  timerText: {
    fontSize: 20,
    color: '#ea4d57',
    fontWeight: 'bold'
  },
  cardBox: {
    top:0,
    flex:1,
    justifyContent: 'center',
  },
  imageContainer: {
    width: cardSize,
    height: cardSize,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#FC5D65',
    justifyContent: 'center',
    backgroundColor: 'white'
  },
  imageHide: {
    display: 'none',
  },
  imageStyle: {
    fontSize: imageSize,
    alignItems: 'center',
	},
});
