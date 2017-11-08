import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Tinderable from './Tinderable';
import Navbar from './Navbar';

class App extends Component {
  render() {

    const cardsData = [
      {
        image: 'https://media.giphy.com/media/bq6F8QYqBU7Yc/giphy.gif',
        id: '1'
      },
      {
        image: 'https://media.giphy.com/media/cwTtbmUwzPqx2/giphy.gif',
        id: '2'
      },
      {
        image: 'https://media.giphy.com/media/3oz8xqZsDaOSHaqLCw/giphy.gif',
        id: '3'
      },
      {
        image: 'https://media.giphy.com/media/3o6fJ4kHPTdebCt9w4/giphy.gif',
        id: '4'
      }
    ];

    return (
      <div className="App">
        <Navbar />
        <div>
          <Switch>
            <Route exact path="/" render={() => <Tinderable initialCardsData={cardsData} />} />
            {/* <Route exact path="/matches" component={Matches} />
            <Route exact path="/getlucky" component={Getlucky} /> */}
          </Switch>
        </div>
      </div>
    );
  }
}


export default App;
