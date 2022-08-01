/* eslint-disable react/prop-types */
import React from 'react';
import './TableRow.css';
import { PropTypes } from 'prop-types';

const returnMarkedCityState = (text, inputval) => {
  // Split text on highlight term, include term itself into parts, ignore case
  const parts = text.split(new RegExp(`(${inputval})`, 'gi'));
  return <span >{parts.map((part) => (part.toLowerCase() === inputval.toLowerCase()
    ? <span style={{ backgroundColor: 'yellow' }}>{part}</span> : part))}</span>;
};
// eslint-disable-next-line react/prop-types
const TableRow = (props) => (
    <>
       <tr>
       <td data-label='City'>
             {returnMarkedCityState(props.city, props.inputval)}
        </td>
        <td data-label='State'>
            {returnMarkedCityState(props.state, props.inputval)}
        </td>
        <td data-label='Population'>
            {parseInt(props.population, 10).toLocaleString('en-US')}
        </td>
        { /* eslint-disable-next-line radix */ }
        <td data-label='Growth' style={{ color: (parseInt(props.growth_from_2000_to_2013) > 0) ? 'green' : 'red' }}>
            {props.growth_from_2000_to_2013}
        </td>
    </tr>
    </>
);

TableRow.propTypes = {
  city: PropTypes.string,
  population: PropTypes.string,
  state: PropTypes.string,
  inputval: PropTypes.string,
  growth_from_2000_to_2013: PropTypes.string,
};

export default TableRow;
