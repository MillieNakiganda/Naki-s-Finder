/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import Title from './components/Title';
import Form from './components/Form';
import Table from './components/Table';
import ErrorBoundary from './components/ErrorBoundary';

const App = () => {
  const [buttonTablestate, setButtonTableState] = useState(true);
  const [inputText, setInputText] = useState('');
  const [citiesObj, setCitiesObj] = useState([]);

  const updateTable = (citiesData, inputValue) => {
    setButtonTableState(false);
    setInputText(inputValue);
    setCitiesObj(citiesData);
  };

  return (<>
    <ErrorBoundary><Title /></ErrorBoundary>
    <ErrorBoundary><Form statebutton={buttonTablestate} onChange={updateTable}/></ErrorBoundary>
    <ErrorBoundary><Table statebutton={buttonTablestate} inputval = {inputText}
    cities={citiesObj}/></ErrorBoundary>
    </>);
};

export default App;
