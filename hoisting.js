console.log(miNombre);
var miNombre = "Orlando";

var miNombre = undefined;
console.log(miNombre + "soy hoisting");
miNombre = "Orlando";

hey();
function hey() {
    console.log('Hola ' + miNombre);
};
var miNombre = 'Orlando';
