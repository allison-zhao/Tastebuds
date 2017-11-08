import React, { Component } from 'react';
import cx from 'classnames';
import Card from './Card';
import DraggableCard from './DraggableCard';

export default class Tinderable extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cards: this.props.initialCardsData,
      alertLeft: false,
      alertRight: false
    };

    this.removeCardLeft = this.removeCard.bind(this, 'left');
    this.removeCardRight = this.removeCard.bind(this, 'right');
  }

  removeCard(side, cardId) {
    setTimeout(function () {
      if (side === 'left') {
        this.setState({ alertLeft: false });
      } else if (side === 'right') {
        this.setState({ alertRight: false });
      }
    }.bind(this), 3000);

    this.setState((state) => ({
      cards: state.cards.filter(c => c.id !== cardId),
      alertLeft: side === 'left',
      alertRight: side === 'right'
    }))
  }

  render() {
    const cards = this.state.cards.map((c, index, arr) => {
      const props = {
        key: c.id,
        cardId: c.id,
        index,
        title: c.title,
        text: c.text,
        image: c.image,
        onOutScreenLeft: this.removeCardLeft,
        onOutScreenRight: this.removeCardRight
      };

      const Element = (index === (arr.length - 1) ? DraggableCard : Card);
      return <Element {...props} />;
    });

    return (
      <div>
        <div className={cx('alert-left', 'alert', { 'alert-visible': this.state.alertLeft })}>left</div>
        <div className={cx('alert-right', 'alert', { 'alert-visible': this.state.alertRight })}>right</div>
        <div id="cards">
          {cards}
        </div>
      </div>
    )
  }
}