/* eslint-disable */

import { obj } from './cities';

const submit_btn = document.getElementById('search-btn');
submit_btn.onclick = getData();

async function getData(){
 
    var temp=""; 
    for (var key in obj) {
        temp+="<tr>";
        temp+="<td data-label='City'>"+obj[key]['city']+"</td>";
        temp+="<td data-label='State'>"+obj[key]['state']+"</td>";
        temp+="<td data-label='Population'>"+obj[key]['population']+"</td>";
        temp+="<td data-label='Growth'>"+obj[key]['growth_from_2000_to_2013']+"</td>"; 
    }

    document.getElementById("tableBody").innerHTML=temp; 
  }
