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
    }
  }



  render() {

    const imageObject = [
      "https://farm5.staticflickr.com/4841/44529846770_73db91cdb5_b.jpg",

      "https://farm5.staticflickr.com/4810/44529846610_bc64036550_b.jpg",

      "https://farm5.staticflickr.com/4833/31407455247_1f0c53152e_b.jpg",

      "https://farm5.staticflickr.com/4873/45434420345_7ede9010cd_b.jpg",
    ]

    const randomInspiration = imageObject[Math.floor(Math.random() * imageObject.length)];

    const currentEmoji = this.state.emoji

    return (
      <div className="card">
        <section className="card__content">


            <img className="card__pic" src={randomInspiration}></img>


          <p className="card__content-text">
            {this.state.text}
          </p>

          <p className="card__content-emoji">
            {currentEmoji}
          </p>

          <button
            className="card__delete"
            onClick={() => this.props.deleteCardCallback(this.state.id)}
            type="button"
            aria-label="Delete"
            >Delete
          </button>
        </section>

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

export default Card;``
