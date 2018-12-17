import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';
import './NewCardForm.css';

const EMOJI_LIST = ["", "heart_eyes", "beer", "clap", "sparkling_heart", "heart_eyes_cat", "dog", "sad_cat"]

class NewCardForm extends Component{
  constructor(props) {
    super(props);

    this.state = {
      text: "",
      emoji: "",

    };
  }

  resetState = () => {
    this.setState({
      text: "",
      emoji: "",
      showMenu: false,
    });
  }

  onFormChange = (event) => {
    const text = event.target.name;
    const value = event.target.value;

    const updatedState = {};
    updatedState[text] = value;
    this.setState(updatedState);
  }

  onSubmit = (event) => {
    event.preventDefault();
    const { text, emoji } = this.state;



    console.log(event);
    this.props.addCardCallback(this.state);
    this.resetState();
  }

// wrie a closure to return list of emojis
  emojiOptions = () => {
    const listEmojis = EMOJI_LIST.map((word, i) => {
      return (
        <option
          key={i}
          name="emoji"
          value={word}
          >
          {emoji.getUnicode(`${word}`)}
        </option>)
    });
    return[<option name="board" value="" key="emoji-select">Select Emoji</option>, listEmojis]
  };

  render() {

    return (

      <div className="new-card-form">
        <form onSubmit={this.onSubmit} className="new-card-form__form">
          <section className="new-card-form__header" >
            <h1>Add Some Inspiration</h1>
          </section>

          <label
            className="new-card-form__form-label"
            htmlFor="Text"
            >text</label>


          <input
              className="new-card-form_form-textarea"
              name="text"
              placeholder="Inspirational Message"
              onChange={this.onFormChange}
              value={this.state.text}>
            </input>



          <div>
            <label
              className="new-card-form__form-label"
              htmlFor="Emoji">Emoji
            </label>

            <select
              name="emoji"
              id="emoji"
              key={this.props.value}
              value={this.state.word}
              onChange={this.onFormChange}
              >
             { this.emojiOptions() }
            </select>


          <input
            className="new-card-form__form-button"
            type="submit"
            name="submit"
            value="Add a Card"
            onSubmit={this.handleSubmit}
            />


      </div>
    </form>
  </div>
    );
  }


}


NewCardForm.propTypes = {
  addCardCallback: PropTypes.func.isRequired,
};

export default NewCardForm;
