/* eslint-disable no-console */
import React from 'react';
import Form from '../components/Form';

export default {
  title: 'Form',
  component: Form,
};
const updateTable = () => {
  console.log('');
};

export const InputForm = () => <Form onChange={updateTable}></Form>;
