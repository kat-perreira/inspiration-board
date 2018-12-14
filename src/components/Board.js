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

  render() {
    const cardList = this.state.cards.map((card) => {
      const formattedCard = {
        id: card["card"].id,
        text: card["card"].text,
        emoji: card["card"].emoji,
      }
      return <Card key={card.id}
        card = {formattedCard} />

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
