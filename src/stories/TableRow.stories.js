import React from 'react';
import TableRow from '../components/TableRow';

export default {
  title: 'TableRow',
  component: TableRow,
};

const Template = (args) => <TableRow {...args} />;

// eslint-disable-next-line import/prefer-default-export
export const Primary = Template.bind({});
Primary.args = {
  city: 'New York',
  growth_from_2000_to_2013: '4.8%',
  latitude: 40.7127837,
  longitude: -74.0059413,
  population: '8405837',
  rank: '1',
  state: 'New York',
  inputval: 'Ne',
};
