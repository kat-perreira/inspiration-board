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
      "https://dingo.care2.com/pictures/causes/3147/3146752.large.jpg",
      "http://www.bandofcats.com/wp-content/uploads/2011/06/cat-motivational-poster_47.jpg",
      "http://www.bandofcats.com/wp-content/uploads/2011/06/cat-motivational-poster_52.jpg",
      "https://pbs.twimg.com/profile_images/612360484155695104/4ZTgU059_400x400.jpg",
      "https://i.pinimg.com/736x/a7/c0/cb/a7c0cbaca9eb3dc97adc1e343c07b2a4--movie-classroom-classroom-posters.jpg",
      "http://www.bandofcats.com/wp-content/uploads/2009/04/cat-inspirational-poster_14.jpg",
      "https://i.pinimg.com/236x/e9/81/5f/e9815fbcd294c94ec487d2dcaea6ec58--motivational-posters-picts.jpg"
    ]

    const randomInspiration = imageObject[Math.floor(Math.random() * imageObject.length)];

    const currentEmoji = this.state.emoji

    return (
      <div className="card">
        <section className="card__content">

          <div className="cat">
            <img src={randomInspiration}></img>
          </div>

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
