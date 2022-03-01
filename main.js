import { domOn } from "./DomFunctions.js";

console.log("coucou")




/*
let donut = document.querySelector('.externalCircle');
console.log(donut)
*/

//Agrandir le cercle extérieur
domOn('.externalCircle', 'mouseover', evt => {
    console.log(evt.target.r.baseVal.value)
    let r = evt.target.r.baseVal.value;
    r += 30;
    evt.target.r.baseVal.value = r;

    console.log("afterchange", evt.target.r.baseVal.value)
});



//récupérer le texte de l'ex 4

let name = document.querySelector('.name');
console.log(name);