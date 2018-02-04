import React, { Component } from 'react';
import {GameScreen} from '../screens/GameScreen.js';
import {HomeScreen} from '../screens/HomeScreen.js';
import {CardBoard} from './CardBoard.js';


const images =
[
  [
    ["😹","😻","😼","😽","🙀","😿","😾","😸","😺"],
		["🚗","🚕","🚙","🚌","🚎","🚓","🚑","🚒","🚚","🚜","🚛","🏎","🚲"],
	  ["🐶","🐭","🐱","🐹","🐰","🐼","🐨","🐯","🦁","🐮","🐷","🐵","🐸"],
	  ["🌽","🌶","🍑","🍒","🍈","🍓","🍇","🍉","🍌","🍋","🍎","🍺","🍲","🍷","🍸","🍹","🍜","🍶","🍵","🍝"]
	],
  [
		["🏤","🏥","🏦","🏨","🏪","🏫","🏩","💒","🏛","⛪","🕌","🕍"],
		["🍔","🍟","🌮","🌯","🍕","🍖","🍗","🍠","🍞","🍯","🍩","🍪","🧀","🌰","🍫"],
		["🌲","🌳","🌴","🌱","🌿","🍀","🍃","🍂","🍁","🍄","🌾","💐","🌷","🌹","🌼","🌵","🌺","🌸"]
	],
	[
    ["🇦🇩","🇩🇿","🇪🇸","🇺🇦","🇦🇪","🇵🇪","🇪🇨","🇻🇳","🇵🇹","🇵🇱","🇺🇾","🇬🇧","🇲🇾","🇮🇷"," 🇲🇬","🇰🇿","🇧🇩","🇸🇿","🇾🇪"],
		["🌝","🌚","🌔","🌓","🌒","🌑","🌘","🌗","🌖","🌕","🌞","🌛","⭐","💫"],
		["😪","😓","😴","😤","😳","😄","😁","😆","😂","😛","🤗","😵","🤕","🙄","🤒","😭","🤐","😇","🤓","😘","😗","🤔"]
	]
]

export class Sets extends React.Component{

render(){

console.log("This is level from Sets " + this.props.levelName);

  var randomnumber = Math.floor(Math.random() * 3);
  var fisrtsetnumber = Math.floor(Math.random() * 4);
  switch (this.props.levelName) {
    case 'Easy':
      var set = images[0][fisrtsetnumber];
      var numCards = 8;
      break;
    case 'Medium':
      var set = images[1][randomnumber];
      var numCards = 10;
      break;
    case 'Hard':
      var set = images[2][randomnumber];
      var numCards = 14;
      break;
    default:
      var set = images[1][randomnumber];
      var numCards = 10;
      break;
  }

  var pickedIndex = [];
  while(pickedIndex.length < numCards){
      var randomnumber = Math.floor(Math.random() * set.length);
      if(pickedIndex.indexOf(randomnumber) > -1) continue;
      pickedIndex[pickedIndex.length] = randomnumber;
  }

  pickedImages = []
  for (var i in pickedIndex) {
    pickedImages = pickedImages.concat(set[pickedIndex[i]]);
  }

  //Duplicate and shuffle
  pickedImages = pickedImages.concat(pickedImages);
  pickedImages.sort(() => {
    return(0.5 - Math.random());
  })

  let cardImages = pickedImages.map((_card,index) => ({
    id: index,
    src: _card,
    visible: true,
    paired: false,
    clickable: false})
  );

  return(
    <CardBoard images={cardImages} />
  );

  }

}
