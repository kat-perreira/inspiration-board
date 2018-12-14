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

// change this into a functional compnent
const Card = (props) => {
const { id, text, emoji } = props.card;

return (
  <div className="card">
    <ul>
      <li>
        {id}
      </li>
      <li>
        {text}
      </li>
      <li>
        {emoji}
      </li>


    </ul>





  </div>


)


}

export default Card;
