import React from 'react';
import './Table.css';
import { PropTypes } from 'prop-types';
import TableRow from '../TableRow/TableRow';

const Table = (props) => (
    <section className="resultsTable">
      <table
      style={{ visibility: props.statebutton === true ? 'visible' : 'hidden' }}
        id="table_Cities"
        className="resultsTable__table">

        <thead className="resultsTable__thead">
            <tr>
            <th scope="col">City</th>
            <th scope="col">State</th>
            <th scope="col">Population</th>
            <th scope="col">Growth</th>
            </tr>
        </thead>
      <tbody id="tableBody">
      {props.cities.map((profile) => <TableRow key= {profile.rank}
           {...profile} inputval = {props.inputval} />)}
        </tbody>
        </table>
    </section>
);

Table.propTypes = {
  cities: PropTypes.array,
  inputval: PropTypes.string,
  statebutton: PropTypes.bool,
};

export default React.memo(Table);
