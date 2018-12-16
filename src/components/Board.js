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

// delete card function
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

  // add card function
  addCard = (cardData) => {
    console.log("gonna add a new card to the inspiration board...");
    console.log(cardData, "cardData");
    const ADD_CARD = `https://inspiration-board.herokuapp.com/boards/kat/cards?text=${cardData.text}&emoji=${cardData.emoji}`

    axios.post(ADD_CARD)
    // promise <3
    .then((response) => {
      console.log("adding card...");
      // updated card list with the new card added set to const
      // const updatedNewCardList = [ ...this.state.cards, cardData]
      let updatedNewCardList = this.state.cards
      updatedNewCardList.push(response.data)

      this.setState({
        cards: updatedNewCardList,
      })
    })
    // if error, inspiration disappears and the world turns dark and cold
    .catch((error) => {
      this.setState({
        error: error.message
      });
    });
  }

  render() {
    const emoji = require("emoji-dictionary");

    let cardList = this.state.cards;

    const list = cardList.map((card) => {
      card = card.card;
      return <Card
        key={card.id}
        id={card.id}
        text={card.text}
        emoji={emoji.getUnicode(`${card.emoji}`)}
        deleteCardCallback={ this.deleteCard }

        />
    });

    return (
      <div className="board">
        { list }


            <NewCardForm
              addCardCallback={ this.addCard }
              />



      </div>

    )
  }

}

Board.propTypes = {

};

export default Board;
