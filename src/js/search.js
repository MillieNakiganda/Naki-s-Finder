/* eslint-disable */

const submit_btn = document.getElementById('search-btn');
submit_btn.onclick = getData();

async function getData(){
    const response= await fetch('cities.json')
    console.log(response);
    const data= await response.json();
    console.log(data);
    length=data.length;
    console.log(data);
    var temp="";
    for (var key in data) {
        temp+="<tr>";
        temp+="<td data-label='City'>"+data[key]['city']+"</td>";
        temp+="<td data-label='State'>"+data[key]['state']+"</td>";
        temp+="<td data-label='Population'>"+data[key]['population']+"</td>";
        temp+="<td data-label='Growth'>"+data[key]['growth_from_2000_to_2013']+"</td>"; 
    }

    document.getElementById("tableBody").innerHTML=temp;
  }
