import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';

import './Card.css';

class Card extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.id,
      text: this.props.text,
      emoji: this.props.emoji,
      image: this.props.img,
    }
  }

  render() {

    return (
      <div className="card">

        <h2>
          {this.state.text}
        </h2>

        <div>
          {this.state.emoji}
        </div>

        <button className="card__delete"
          onClick={() => this.props.deleteCardCallback(this.state.id)}
          type="button"
          aria-label="Remove"
          >
          X
        </button>

      </div>
    )
  }
}

Card.propTypes = {
  id: PropTypes.string,
  text: PropTypes.string,
  emoji: PropTypes.string,
  deleteCardCallback: PropTypes.func,
  img: PropTypes.string,

};

// change this into a functional component
// const Card = (props) => {
// const { id, text, emoji } = props.card;
//
//
//
// return (
//   <div className="card">
//     <div className=".card__content-text">
//         {text}
//       </div>
//       <div >
//         {emoji}
//       </div>
//
//       <button onClick={() => props.deleteCardCallback(props.id)} className=".card__delete"type="button">X</button>
//
//   </div>
//
//
// )
//
//
// }
//
export default Card;``
