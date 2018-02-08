import React, { Component } from 'react';
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

    var randomNumber = Math.floor(Math.random() * 3);
    var firstSetNumber = Math.floor(Math.random() * 4);

    switch (this.props.levelName) {
      case 'Easy':
        var set = images[0][firstSetNumber];
        var numCards = 2;
        break;
      case 'Medium':
        var set = images[1][randomNumber];
        var numCards = 10;
        break;
      case 'Hard':
        var set = images[2][randomNumber];
        var numCards = 14;
        break;
      default:
        var set = images[1][randomNumber];
        var numCards = 10;
        break;
    }

    var pickedIndex = [];
    while(pickedIndex.length < numCards){
        var randomNumber = Math.floor(Math.random() * set.length);
        if(pickedIndex.indexOf(randomNumber) > -1) continue;
        pickedIndex[pickedIndex.length] = randomNumber;
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
      <CardBoard images={cardImages} level={this.props.levelName} />
    );
  }
}
