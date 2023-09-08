var esUsuario = true; 
if(esUsuario) {  
    console.log('Tiene acceso al contenido'); 
}
var esUsuario = false; 

if(esUsuario) {
    console.log('Tiene acceso al contenido'); 
} else {
    console.log('Tienes que crear una cuenta para poder acceder al contenido');
}
var edad = 18; 
var accion; 

if(edad >= 18) {
    accion = 'Puede votar'
} else { 
    accion = 'No puede votar'
}
console.log(accion);
var edad = 18; 
var accion;  

if(edad === 18) {
    accion = 'Puede votar, será su 1ra votación'
} else if(edad > 18) { 
    accion = 'Puede votar'
} else { 
    accion = 'Aun no puede votar'
}
console.log(accion);

var numero = 1; 
var resultado; 

if(numero === 1) {
    resultado = 'Sí son un 1'; 
} else {
    resultado = 'No soy un 1'; 
}
condition ? true : false; 
var numero = 1; 
var resultado = numero === 1 ? 'Sí son un 1' : 'No soy un 1';
console.log(resultado);
