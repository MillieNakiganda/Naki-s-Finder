/* eslint-disable no-unused-expressions */
import React, { useState, useCallback } from 'react';
import Form from './components/Form/Form';
import Table from './components/Table';
import Title from './components/Title';

const App = () => {
  const [tablestate, setTableState] = useState(false);
  const [inputText, setInputText] = useState('');
  const [citiesObj, setCitiesObj] = useState([]);

  const updateTable = useCallback((citiesData, inputValue) => {
    citiesData.length === 0 ? setTableState(false) : setTableState(true);
    setInputText(inputValue);
    setCitiesObj(citiesData);
  }, [inputText, citiesObj]);

  return (
    <>
    <Title>Naki&apos;s Finder</Title>
    <Form onChange={updateTable}></Form>
    <Table statebutton={tablestate} cities={citiesObj} inputval = {inputText}></Table>
    </>);
};

export default App;
