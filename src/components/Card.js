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
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5tLY_SnBx4SaOCp_JOJMfDHY3ynnhqVJhmTZhroOjUkAm88T7KA",

      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6QHfAIsVpci-gQc1Mi95J7M-xUyULCEM_K9p3MZYrCyABb_kaiQ",

      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWZhM3qZxbGG4jyCfpADnm9YM2A5lK4fbNys5M9hGWR8AEGRIH",

      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjEeszCkeEQaSpfejE3MpuLBOeqb5QeiYeyp-lZeIcNIaBaTiQoQ",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR59xqLYNFvQDBh8dq_jnNxUHtEJz-YzHo6ZvBuKowwu-7s-H9j7A",
    ]

    const randomInspiration = imageObject[Math.floor(Math.random() * imageObject.length)];

    const currentEmoji = this.state.emoji

    return (
      <div className="card">
        <section className="card__content">

          <div className="card__pic">
            <img  src={randomInspiration}></img>
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
