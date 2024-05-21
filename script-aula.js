const img = document.querySelectorAll('img')
console.log(img)

const imagem = document.querySelectorAll('img[src^="img/imagem"]');
console.log(imagem);

const link = document.querySelectorAll('[href^="#"]');
console.log(link);

// animais.forEach(function(item, index){
//     console.log(item)
// })

// const animais = document.querySelectorAll('.animais-lista')

// animais.forEach(function(item, index){
//     console.log(item)
// })

const primeiroH2 = document.querySelector('.animais-descricao');
const h2 = primeiroH2.querySelector('h2');
console.log(h2)

const paragrafos = document.querySelectorAll('p')
console.log(paragrafos[paragrafos.length -1]);