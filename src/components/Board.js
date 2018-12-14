import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import './Board.css';
import Card from './Card';
import NewCardForm from './NewCardForm';
import CARD_DATA from '../data/card-data.json';

class Board extends Component {
  constructor() {
    super();

    this.state = {
      cards: [],
    };
  }

  componentDidMount() {
    console.log("Hey look, it did the mount thing");
    const GET_ALL_THE_CARDS_URL = "https://inspiration-board.herokuapp.com/boards/kat/cards";

    // promise <3
    axios.get(GET_ALL_THE_CARDS_URL)
    .then((response) => {
      this.setState({
        cards: response.data,
      });
    })
    // if nothing is retrieved, burn the internet down
    .catch((error) => {
      this.setState({
        error: error.message
      });
    });
  }

  deleteCard = (id) => {
    console.log("trying to delete card data");
    axios.delete(' https://inspiration-board.herokuapp.com/cards/:card_id', id)
    // promise <3
    .then((response) => {
      console.log('You just deleted a card');
      const updatedCardList = [ ...this.state.cards]
      // update the card list to reflect the changes
      this.setState({
        cards: updatedCardList,
      })
    })
    // if there are errors send out 50 bot messages on slack to Aurea of Wilfred
    .catch((error) => {
      this.setState({
        error: error.message
      });
    });
  }

  render() {
    const cardList = this.state.cards.map((card) => {
      const formattedCard = {
        id: card["card"].id,
        text: card["card"].text,
        emoji: card["card"].emoji,
      }
      return <Card
        key={card.id}
        card = {formattedCard}
        deleteCardCallback={ this.deleteCard }
        />

    })
    return (
      <div className="board">

            { cardList }
      </div>
    )
  }

}

Board.propTypes = {

};

export default Board;
