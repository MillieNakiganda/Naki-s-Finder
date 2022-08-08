import React from 'react';
import Table from '../components/Table';

export default {
  title: 'Table',
  component: Table,
};

const Template = (args) => <Table {...args} />;

// eslint-disable-next-line import/prefer-default-export
export const SampleTable = Template.bind({});
SampleTable.args = {
  cities: [
    {
      city: 'New York',
      growth_from_2000_to_2013: '4.8%',
      latitude: 40.7127837,
      longitude: -74.0059413,
      population: '8405837',
      rank: '1',
      state: 'New York',
    },
    {
      city: 'Connecticut',
      growth_from_2000_to_2013: '4.8%',
      latitude: 40.7127837,
      longitude: -74.0059413,
      population: '8405837',
      rank: '1',
      state: 'New York',
    },
  ],
  inputval: 'Ne',
  statebutton: true,
};
