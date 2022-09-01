import React from 'react';
import './Title.css';

// eslint-disable-next-line react/prop-types
const Title = ({ children }) => (
      <header className="header">
        <h1 className="header__h1">
            { children }
        </h1>
      </header>
);

export default React.memo(Title);
