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



// conectar botones-html

let botonComercio = document.getElementById('comercios')
let botonInformacion = document.getElementById('informacion')
let botonRedes = document.getElementById('redes')
let botonOrganizaciones = document.getElementById('organizaciones')
let botonNegocios = document.getElementById('negocios')
let botonEducacion = document.getElementById('educacion')

let titulo = document.getElementById('listaDominios')



// Funcion para filtrar segun dominios

botonComercio.addEventListener('click', function() {

  const comercios = domain.filter(dominio => {
    return dominio.endsWith('.com')
  })

  titulo.innerHTML = 'Los dominios en ese campo son: ' + '<br>' + comercios.join('<br>');

})

botonInformacion.addEventListener('click', function() {

  const inform = domain.filter(dominio => {
    return dominio.endsWith('.info')
  })

  titulo.innerHTML= 'Los dominios en ese campo son: ' + '<br>' + inform.join('<br>')

})

botonRedes.addEventListener('click', function() {

  const redes = domain.filter(red => {
    return red.endsWith('.net')
  })

  titulo.innerHTML = 'Los dominios en ese campo son: ' + '<br>' + redes.join('<br>')

})

botonOrganizaciones.addEventListener('click', function() {

  const organizaciones = domain.filter(org => {
    return org.endsWith('.org')
  })

  titulo.innerHTML = 'Los dominios en ese campo son: ' + '<br>' + organizaciones.join('<br>')

})

botonNegocios.addEventListener('click', function() {

  const negocios = domain.filter(neg => {
    return neg.endsWith('.net')
  })

  titulo.innerHTML = 'Los dominios en ese campo son: ' + '<br>' + negocios.join('<br>')

})

botonEducacion.addEventListener('click', function() {

  const educacion = domain.filter(edu => {
    return edu.endsWith('.edu')
  })

  titulo.innerHTML = 'Los dominios en ese campo son: ' + '<br>' + educacion.join('<br>')

})