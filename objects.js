var objecto = {};

var miAuto = {
    marca: "Toyota",  
    modelo: "Corolla",
    annio: 2020,
    detallesDelAuto: function() {   
      return `Auto ${this.modelo} ${this.annio}`;
  }
};
miAuto.annio 
miAuto.modelo 
miAuto.detallesDelAuto(); 

function auto(marca, modelo, annio) {  
    this.marca = marca;  
    this.modelo = modelo;
    this.annio = annio;
}
var newAuto = new auto("Tesla", "Model 3", 2020);