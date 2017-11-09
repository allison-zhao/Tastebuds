import React, { Component } from 'react';
import Card from './Card';
import DraggableCard from './DraggableCard';
import MatchOverlay from './MatchOverlay';

export default class Tinderable extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cards: this.props.initialCardsData,
      alertLeft: false,
      alertRight: false,
      liked: []
    };

    this.removeCardLeft = this.removeCard.bind(this, 'left');
    this.removeCardRight = this.removeCard.bind(this, 'right');
    this.keepSwiping = this.keepSwiping.bind(this);
  }

  removeCard(side, cardId) {
    side === 'right' ?
      this.setState((state) => ({
        cards: state.cards.filter(c => c.id !== cardId),
        alertLeft: side === 'left',
        alertRight: side === 'right',
        liked: [...state.liked, cardId]
      }))
      :
      this.setState((state) => ({
        cards: state.cards.filter(c => c.id !== cardId),
        alertLeft: side === 'left',
        alertRight: side === 'right'
      }))
  }

  keepSwiping(){
    this.setState({liked: [...this.state.liked, 0]})
  }

  render() {
    const cards = this.state.cards.map((c, index, arr) => {
      const props = {
        key: c.id,
        cardId: c.id,
        index,
        text: c.text,
        image: c.image,
        onOutScreenLeft: this.removeCardLeft,
        onOutScreenRight: this.removeCardRight
      };

      const Element = (index === (arr.length - 1) ? DraggableCard : Card);
      return <Element {...props} key={this.props.key} />;
    });

    return (
      <div>
        <div id="cards">
          {cards}
        </div>
        {this.state.liked.length === 2 ?
          <MatchOverlay keepSwiping={this.keepSwiping} />
          : null
        } 
      </div>
    )
  }
}