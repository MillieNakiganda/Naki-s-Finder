import React from 'react';
import './Form.css';

// eslint-disable-next-line react/prop-types
const Form = () => (
    <section className="form">
    <form className="form__form">
      <input
        className="form__input form__input--query"
        type="text"
        id="text-to-search"
        placeholder="City or State"
      />
      <input
        className="form__input form__input--submit"
        type="submit"
        id="search-btn"
        value="Clear Search"
      />
    </form>
  </section>
);

export default Form;
