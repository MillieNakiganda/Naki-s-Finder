/* eslint-disable */

import { obj } from './cities';

const submit_btn = document.getElementById('search-btn');
const input = document.querySelector('input');
input.addEventListener('input', getData);
submit_btn.onclick = getData;


async function getData() {

  const input_text = document.getElementById('text-to-search').value;
  if (input_text !== '') {
    const regex = new RegExp(input_text, "ig");
    var temp = "";
    obj.forEach(data => {
      if ((data.city).match(regex) || (data.state).match(regex)) {



        temp += "<tr>";

        temp += "<td data-label='City'>" + data.city + "</td>";
        temp += "<td data-label='State'>" + data.state + "</td>";
        temp += "<td data-label='Population'>" + data.population + "</td>";

        (parseInt(data.growth_from_2000_to_2013) > 0) ?
          temp += "<td data-label='Growth' style='color:green;'>" + data.growth_from_2000_to_2013 + "</td>" :
          temp += "<td data-label='Growth' style='color:red;'>" + data.growth_from_2000_to_2013 + "</td>";


      }
    });
    document.getElementById("tableBody").innerHTML = temp;
    document.getElementById("table_Cities").style.visibility = 'visible';
    document.getElementById("search-btn").style.visibility = 'visible';


    //Highlight keyword
    let table, tr, td, txtValue;

    table = document.getElementById("table_Cities");
    tr = table.getElementsByTagName("tr");


    // Loop through all table rows, and hide those who don't match the search query
    for (let i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td");
      for (let j = 0; j < td.length; j++) {

        txtValue = td[j].textContent;

        let count = (txtValue.match(regex) || []).length;
        if (count !== 0) {

          td[j].innerText = '';
          let strArray = txtValue.split(input_text);
          let loopLength = strArray.length - 1;

          for (let i = 0; i < loopLength; i++) {
            createTagAndAppendTo('span', strArray[i], td[j]);
            createTagAndAppendTo('mark', input_text, td[j]);
          }

          createTagAndAppendTo('span', strArray[loopLength], td[j]);

        }
      }
    }


  }
  else {
    document.getElementById("table_Cities").style.visibility = 'hidden';
    document.getElementById("search-btn").style.visibility = 'hidden';
  }

  return false;

}

function createTagAndAppendTo(tag, txt, elem) {
  let customTag = document.createElement(tag);
  customTag.textContent = txt;
  elem.append(customTag);
}

