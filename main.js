// Se declaran tres variables
let x,y,z;

x = 0;
y = 2;
z = 3;

// Numeros
 let numeroUno = 10; // Entero
 let numeroDos = 10.10; // Float (numero decimal)

// Texto
 let miNombre = "Alex";// Valor string(cadena de texto) 
 let miNombre1 = 'Ivan';// Valor string(cadena de texto) 
 let miNombre2 = `Alex ${numeroDos}`;// Con comillas invertidas se pueden incrustar variables

// Operadores
const variable = "esto es una variable"// Operador asignación
const suma = 1+1;
const resta = 1-1;
const multiplicacion = 1*1;
const division = 1/1;
const resto = 5%2;// % con este operador nos dara el resto de una division
const exponente = 3 ** 3;// ** con este operador me dara un numero elevado a algo



//Contadores

let one = 3;
let two = 4;


one++;// aumenta a uno
two--;// disminuye a uno


// SCOPE


let chupalo = 5;
{
    let e = 4;
    //console.log(e)
}

//console.log(e)

//BOOLEANOS

let t = true;// verdadero
let f = false;// Falso 

// Object

//let q = {
    //clave:valor// valor objeto
//}

//Array

let h =[1,2,2,3,3]//lista de valores numericos
let g =['alex','pedro']// lista de cadenas de texto 

//Date  
//const fecha = new Date("05-15-2023") 

//console.log(fecha)



//Parseo de string a Numerico


let num1 = 5;
let num2 = '4';

let c = num1 + parseInt(num2);//Integer
//console.log(c)

//Parseo de string a flotante(float)


let num3 = 5.5;
let num4 = '4.5';

let total = num1 + parseFloat(num2);//Integer
//console.log(total)


/*
let suma1 = 3
let suma2 = 3
let respuesta 

function mifunction(respuesta){
   respuesta = suma1 + suma2
   return respuesta
}


let question = mifunction(respuesta)



console.log(question)

*/

/*
function sumaUno(t,y){
    return t + y
}

let respuesta = sumaUno(3,3)

console.log(respuesta)

*/
/*
const temperatura = 76;

function transformarCelsius(fahrenheit){
    return (5/9) * (fahrenheit-32)
}

const respuesta = transformarCelsius(temperatura)

console.log("La temperatura en grados Celsius es de ", respuesta)

*/


//Funcion clasica
const value = '120'
/*
function valorString(value){
    return value + 1;

}

let r = valorString(parseInt(value))


console.log(r)*/


//Funcion flecha, 

let valueString = valor => valor + 1;

let re = valueString(parseInt(value))

//console.log(re)



let mochila = {
    marca: "adidas",
    peso: "1kg",
    bolsillos: 3

}


//Forma de acceder a una clave y reasignarla
mochila.marca = "puma"
mochila["peso"] ="2kg"

//Formas de llamar a un objeto

console.log(mochila.marca)
console.log(mochila["peso"])
console.log(mochila)
console.log(mochila[marca])