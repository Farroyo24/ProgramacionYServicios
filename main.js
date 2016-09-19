/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
//console.log("Hola mundo");
//var Hola = "Hola";
//console.log(Hola);

//CREANDO UN OBJETO SIN PROPIEDADES
//posteriormente se añaden
var objeto1={};
    objeto1.nombre='José Ricardo';
    objeto1.edad=18;

var objeto2={
    nombre:'Manuel Moral',
    edad:22
}
console.log(objeto1);
console.log(objeto2);
//Borro propiedades del objeto.
delete objeto2.edad;
console.log(objeto2);
//Vuelvo a añadir la propiedad.
objeto2.edad=22;
console.log(objeto2);

if(isNaN(objeto2.edad))
    console.log("No es un numero");
else
    console.log("Es un numero");

if(isNaN(objeto2.nombre))
    console.log("No es un numero");
else
    console.log("Es un numero");  
//console.log(isNaN(objeto2.edad));
//console.log(isNaN(objeto2.nombre));

//operador typeof
console.log(typeof objeto2.edad);
console.log(typeof objeto2.nombre);

var numeroString='12';
var numero=3;
console.log(parseInt(numeroString)+numero);