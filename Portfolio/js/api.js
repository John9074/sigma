
async function getFact(){
let baseURL = 'http://numbersapi.com/';
let today = new Date();
let day = today.getDate();
let month = today.getMonth() + 1;
let url = baseURL + month + '/'+ day + '/'+ 'date';
let response = await fetch(url);

let result = await response.text();
console.log(result);

let div = document.getElementById('fact');
let div2 = document.createTextNode(result);

div.appendChild(div2);

}

