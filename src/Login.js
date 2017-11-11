import React, { Component } from 'react';
import App from './App'

export default class FacebookLogin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false
    }
  }

  componentDidMount() {
    window.FB.getLoginStatus((response) => {
      if (response.status === 'connected') {
        console.log('You are logged in with Facebook!');
        this.setState({ loggedIn: true })
      }
      else {
        window.FB.login();
      }
    });
  }

  render() {
    if (this.state.loggedIn === false) return null;
    return (
      <App />
    )
  }
}
