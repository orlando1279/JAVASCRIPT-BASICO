var frutas = []; 
var frutas = ["Manzana", "Platano", "Cereza", "Fresa"]; 
console.log(frutas); 
console.log(frutas.length); 
console.log(frutas[0]);   

 var masFrutas = frutas.push("Uvas"); 
 console.log(frutas);

 var utlimo = frutas.pop("Uvas"); 
 console.log(frutas);

var nuevaLogitud = frutas.unshift("Uvas"); 
console.log(frutas);

var borrarFruta = frutas.shift("Manzana"); 
console.log(frutas);

var posicion = frutas.indexOf("Platano"); 
console.log(frutas);
