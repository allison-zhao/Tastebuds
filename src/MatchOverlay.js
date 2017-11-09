import React, { Component } from 'react';
import jerry from './img/jerry.png'

export default class MatchOverlay extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="matchoverlay">
        <div className="matchoverlay-content">
          <h1 className="match-title">It's a match!  <i className="fa fa-free-code-camp" aria-hidden="true" /></h1>
          <img src={jerry} className="profile-pic" alt="jerry-profile-pic" style={{ opacity: 1 }} />
          <div className="match-buttons">
            <button className="button is-info is-medium">Message</button>
            <button className="button is-link is-medium" onClick={() => this.props.keepSwiping()}>Keep Swiping</button>
          </div>
        </div>
      </div>
    )
  }
}
