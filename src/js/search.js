/* eslint-disable quotes */
/* eslint-disable-next-line quotes */
import { obj } from './cities';

const submitBtn = document.getElementById('search-btn');
const input = document.querySelector('input');

const returnMarkedCityState = (datavalue, inputText) => {
  const trailspac = inputText.trim();
  const cleanSpaces = trailspac.replace(/\s+/g, ' ');
  const regex = new RegExp(`(${cleanSpaces})`, 'gi');
  return datavalue.replace(regex, "<span style='background-color: #FFFF00'>$1</span>");
};

const getData = () => {
  const inputText = document.getElementById('text-to-search').value;

  if (inputText !== '') {
    const trailspac = inputText.trim();
    const cleanSpaces = trailspac.replace(/\s+/g, ' ');
    const regex = new RegExp(cleanSpaces, 'ig');

    let tableRow = ``;

    obj.forEach((data) => {
      if ((data.city).match(regex) || (data.state).match(regex)) {
        tableRow += `<tr>`;

        tableRow += `<td data-label='City'> ${returnMarkedCityState((data.city).trim(), inputText)}</td>`;
        tableRow += `<td data-label='State'> ${returnMarkedCityState(data.state.trim(), inputText)} </td>`;
        tableRow += `<td data-label='Population'> ${parseInt(data.population, 10).toLocaleString('en-US')} </td>`;

        // eslint-disable-next-line no-unused-expressions
        (parseInt(data.growth_from_2000_to_2013, 10) > 0)
          ? tableRow += `<td data-label='Growth' style='color:green;'> ${data.growth_from_2000_to_2013} </td>`
          : tableRow += `<td data-label='Growth' style='color:red;'> ${data.growth_from_2000_to_2013} </td>`;
      }
    });
    document.getElementById('tableBody').innerHTML = tableRow;
    document.getElementById('table_Cities').style.visibility = 'visible';
    document.getElementById('search-btn').style.visibility = 'visible';
  } else {
    document.getElementById('table_Cities').style.visibility = 'hidden';
    document.getElementById('search-btn').style.visibility = 'hidden';
  }

  return false;
};

const clearTable = () => {
  document.getElementById('table_Cities').style.visibility = 'hidden';
  document.getElementById('text-to-search').value = '';
  document.getElementById('search-btn').style.visibility = 'hidden';
  return false;
};

input.addEventListener('input', getData);
submitBtn.onclick = clearTable;
