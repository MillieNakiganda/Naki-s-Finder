/* eslint-disable array-callback-return */
/* eslint-disable react/prop-types */
/* eslint-disable */
import React, { useState } from 'react';
import { obj } from '../js/cities';

const Form = (props) => {
  const [inputText, setInputText] = useState('');

  const updateValue = (event) => {
    event.preventDefault();
    setInputText(event.target.value);
    const y = inputText;
    const hy = event.target.value;
    debugger;

    if (event.target.value !== '') {
      const selectedCities = [];
      const trailspac = event.target.value.trim();
      const cleanSpaces = trailspac.replace(/\s+/g, ' ');
      const regex = new RegExp(cleanSpaces, 'ig');
      obj.forEach((data) => {
        if ((data.city).match(regex) || (data.state).match(regex)) {
          selectedCities.push(data);
        }
      });

      props.onChange(selectedCities, event.target.value.trim());
    }
  };

  const handlesubmit = (event) => {
    event.preventDefault();
    setInputText('');
    props.onChange([], inputText.trim());
  };
  return (
    <section className="form">
      <form className="form__form">
        <input
          className="form__input form__input--query"
          type="text"
          id="text-to-search"
          onChange={updateValue}
          value={inputText}
          placeholder="City or State"
        />
        <input
          className="form__input form__input--submit"
          type="submit"
          onSubmit={handlesubmit}
          id="search-btn"
          style={{ visibility: props.statebutton === true ? 'hidden' : 'visible' }}
          value="Clear Search"
        />
      </form>
    </section>
  );
};

export default Form;
