import React, { Component } from 'react';
import Tinderable from './Tinderable';

import portrait1 from './img/portrait-1.jpg';
import portrait2 from './img/portrait-2.jpg';
import portrait3 from './img/portrait-3.jpg';
import portrait4 from './img/portrait-4.jpg';

console.log(portrait1) 
class App extends Component {
  render() {

    var cardsData = [
      {
        title: 'A wonderful day',
        text: '—— - ——— - - - ——— ———— - — ——— —— - ————— - - ———— —— - ——— - - - ——— ———— - — ——— —— -',
        image: portrait1,
        id: '1'
      },
      {
        title: 'My amazing journey',
        text: ' - — ——— —— - ————— - - ———— —— - ——— - - - ——— ———— - — ——— —— - ————— - - ——— - - - ——— ———— ',
        image: portrait2,
        id: '2'
      },
      {
        title: 'Three recipes without cocoa',
        text: ' - — ——— —— - ————— - - ———— —— - ——— - - - ——— ———— - — ——— —— - ————— - - ——— - - - ———',
        image: portrait3,
        id: '3'
      },
      {
        title: 'Generic clickbait title',
        text: ' —— ———— - — ——— —— - ————— - - ———— —— - ——— - - - ——— ———— - — ——— —— - ————— - - ———— —— - ——— - - - ——— ———— - — ——— —— - ————— - - ———— - ——— ',
        image: portrait4,
        id: '4'
      }
    ];
    return (
      <div className="App">
        <Tinderable initialCardsData={cardsData} />
      </div>
    );
  }
}


export default App;
