const paragrafo = document.querySelectorAll('p');

paragrafo.forEach((item, index) => console.log(item, index))
paragrafo.forEach((item) => console.log(item.innerText))