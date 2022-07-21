/* eslint-disable react/prop-types */
import React from 'react';
import TableRow from './TableRow';

const Table = (props) => (
    <section className="resultsTable">
      <table
        id="table_Cities"
        style={{ visibility: props.statebutton === true ? 'hidden' : 'visible' }}
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

export default Table;
