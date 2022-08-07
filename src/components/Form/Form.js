/* eslint-disable react/prop-types */
import React, {
  useEffect, useState, useRef,
} from 'react';
import { PropTypes } from 'prop-types';
import './Form.css';
import { obj } from '../../js/cities';

const Form = (props) => {
  const [inputText, setInputText] = useState('');
  const [buttonState, setButtonState] = useState(false);

  const textInput = useRef();

  const updateValue = (event) => {
    event.preventDefault();
    setInputText(event.target.value);
    // eslint-disable-next-line no-unused-expressions
    event.target.value !== '' ? setButtonState(true) : setButtonState(false);
  };

  const handlesubmit = (event) => {
    event.preventDefault();
    setInputText('');
    // setButtonState(false);
    props.onChange([], inputText.trim());
  };

  useEffect(() => { textInput.current.focus(); }, []);

  useEffect(() => {
    const selectedCities = [];
    if (inputText.trim() !== '') {
      const trailspac = inputText.trim();
      const cleanSpaces = trailspac.replace(/\s+/g, ' ');
      const regex = new RegExp(cleanSpaces, 'ig');
      obj.forEach((data) => {
        if ((data.city).match(regex) || (data.state).match(regex)) {
          selectedCities.push(data);
        }
      });
    }
    props.onChange(selectedCities, inputText.trim());
  }, [inputText]);

  return (
    <section className="form">
    <form className="form__form">
      <input
        className="form__input form__input--query"
        type="text"
        onChange={updateValue}
        ref={textInput}
        value={inputText}
        id="text-to-search"
        placeholder="City or State"
      />
      <input
        className="form__input form__input--submit"
        type="submit"
        onSubmit={handlesubmit}
        id="search-btn"
        style={{ visibility: buttonState === true ? 'visible' : 'hidden' }}
        value="Clear Search"
      />
    </form>
  </section>);
};
Form.prototypes = {
  onChange: PropTypes.function,
};

export default Form;
