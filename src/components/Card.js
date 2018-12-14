import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';

import './Card.css';

class Card extends Component {
  constructor() {
    super();

    this.state = {
      inspireQuote: "",
    };
  }

  render() {
    console.log(emoji.unicode);


    return (
      <div className="card">
        { card }
      </div>
    )
  }
}

Card.propTypes = {

};

export default Card;
