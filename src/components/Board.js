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
    const DELETE_THIS_CARD = `https://inspiration-board.herokuapp.com/cards/${id}`

    console.log("trying to delete card data");
    axios.delete(DELETE_THIS_CARD)
    // promise <3
    .then(() => {
      console.log('You just deleted a card');
      // this filters stuff into updated card list without the id
      const updatedCardList = this.state.cards.filter((card) => {
        return card.card.id !== id
      })
      console.log(updatedCardList);
      // update the card list to reflect the changes
      // find index,findIndex, splice it out, then set the state
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
    const emoji = require("emoji-dictionary");

    let cardList = this.state.cards;

    const list = cardList.map((card, i) => {
      card = card.card;
      return <Card
        key={card.id}
        id={card.id}
        text={card.text}
        emoji={emoji.getUnicode(`${card.emoji}`)}
        deleteCardCallback={ this.deleteCard }
        image={card.img}
        />
    });


    return (
      <div className="board">
        { list }
      </div>
    )
  }

}

Board.propTypes = {

};

export default Board;
