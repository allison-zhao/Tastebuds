import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Tinderable from './Tinderable';
import Navbar from './Navbar';
import Matches from './Matches';
import cardsData from './Data';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <div>
          <Switch>
            <Route exact path="/" render={() => <Tinderable initialCardsData={cardsData} />} />
            <Route exact path="/matches" component={Matches} />
            {/* <Route exact path="/getlucky" component={Getlucky} /> */}
          </Switch>
        </div>
      </div>
    );
  }
}
