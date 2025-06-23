import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";


let pronoun = ['the', 'our'];
let adj = ['great', 'big'];
let noun = ['jogger', 'racoon'];
let dominios = ['.com', '.net', '.info', '.org', '.biz', '.edu']

const domain = pronoun.flatMap(pronouns => adj.flatMap(adje => noun.flatMap(noum => dominios.map(dom =>
  pronouns + adje + noum + dom))))


console.log(domain);



// conectar boton-html

let botonComercio = document.getElementById('comercios')
let titulo = document.getElementById('listaDominios')

// Funcion para filtrar acabados en .com

botonComercio.addEventListener('click', function() {

  const comercios = domain.filter(dominio => {
    return dominio.endsWith('.com')
  })

  titulo.innerHTML = comercios.join('<br>')

})