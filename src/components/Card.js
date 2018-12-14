import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';

import './Card.css';

// class Card extends Component {
//   constructor() {
//     super();
//
//     this.state = {
//       inspireQuote: "",
//     };
//   }
//
//   render() {
//     console.log(emoji.unicode);
//
//
//     return (
//       <div className="card">
//         { card }
//       </div>
//     )
//   }
// }
//
// Card.propTypes = {
//
// };

// change this into a functional component
const Card = (props) => {
const { id, text, emoji } = props.card;



return (
  <div className="card">
    <div className=".card__content-text">
        {text}
      </div>
      <div >
        {emoji}
      </div>

      <button className=".card__delete"type="button">X</button>

  </div>


)


}

export default Card;
