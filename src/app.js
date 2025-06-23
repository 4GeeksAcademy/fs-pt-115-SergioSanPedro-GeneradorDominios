import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function () {
  //write your code here
  console.log("Hello Rigo from the console!");

  let pronoun = ['the', 'our'];
  let adj = ['great', 'big'];
  let noun = ['jogger', 'racoon'];
  let dominios = ['.com', '.net', '.info', '.org', '.biz', '.edu']

  const domain = pronoun.flatMap(pronouns => adj.flatMap(adje => noun.flatMap(noum => dominios.map(dom =>
    pronouns + adje + noum + dom))))

  console.log(domain);



};
