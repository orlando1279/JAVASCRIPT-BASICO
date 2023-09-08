var articulos = [
    { nombre: 'Bici', costo: 3000 },
    { nombre: 'TV', costo: 2500 },
    { nombre: 'Libro', costo: 320 },
    { nombre: 'Celular', costo: 10000 },
    { nombre: 'laptop', costo: 20000 },
    { nombre: 'teclado', costo: 500 },
    { nombre: 'audifonos', costo: 1700 }
]
var articulosFiltrados = articulos.filter(function(articulo){
    return articulo.costo <= 500  
});
console.log(articulosFiltrados);

var nombreArticulos = articulos.map(function(articulo){
    return articulo.nombre  
});
console.log(nombreArticulos);

var encuentraArticulos = articulos.find(function(articulo){
    return articulo.nombre === 'laptop';
});
console.log(encuentraArticulos);

articulos.forEach(function(articulo){
    console.log(articulo.nombre);
});
var articulosBaratos = articulos.some(function(articulo){
    return articulo.costo <= 700;
});
console.log(articulosBaratos); 

var articulosBaratos = articulos.every(function(articulo){
    return articulo.costo <= 700;
});
console.log(articulosBaratos); 

var costoTotal = articulos.reduce(function(totalActual, articulo){
    return articulo.costo + totalActual;
}, 0); 
console.log(costoTotal); 
var numeros = [1, 2, 3, 4, 5, 6];
var incluyeNumero = numeros.includes(2); 
console.log(incluyeNumero);