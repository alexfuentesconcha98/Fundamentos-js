//Otra manera de crear un array

const arreglo =['Alex','Fuentes','concha']


/*

const array = new Array(5)

array[0] = 'Curso de HTML'
array[1] = 'Curso de css'
array[2] = 'Curso de JS'
array[3] = 'Curso de Angular'
array[4] = 'Curso de React'

*/
//console.log(array)

//console.log(array[0])

//document.getElementById('seleccionable').innerHTML = array


const array1 = new Array(5)

array1[0] = [1,2,3,4,5,6]
array1[1] = 'Curso de css'
array1[2] = 'Curso de JS'
array1[3] = {nombre:'Alex', Apellido:'Fuentes'}
array1[4] = 'Curso de React'

// Con length vemos el numero de elementos del arreglo
console.log(array1.length)

// Con sort podemos ordenar de menor a mayor cuando se trata de numeros y de A a la Z en las letras.

const numeros = [1,2,3,4,5,6]

console.log(numeros.sort())

const nombres = ['Alex','Pedro','Belen']

console.log(nombres.sort())

//Como acceder al ultimo elemento
const marcas =['puma', 'adidas', 'Vans']

console.log(marcas[marcas.length-1])


let algo = 1;

algo = 2;
console.log(algo)


//Como recorrer los elementos con un for

const arrayForn = ['Despertarse','Comer','Estudiar','Dormir']
let texto = '';
for (let index = 0 ; index < arrayForn.length; index++){
    texto += "<li>" + arrayForn[index] + '</li>'
    
}

//document.getElementById("array").innerHTML = texto


//Agregar un elemento al array

const estudios= ['HTML','CSS','JS']
estudios[estudios.length] = 'REACT'
estudios[estudios.length] = 'ANGULAR'


console.log(estudios)



const frutas = ['Manzana','Pera','Banana', 'Naranja','Manzana','Naranja']
// Con este metodo filtramos por la fruta que queramos
const result = frutas.filter(x => x == 'Manzana')

console.log(result)







const objetos = [
    {nombre:'Pedro',apellido:'Gonzalez'},
    {nombre:'Maria',apellido:'Gonzalez'},
    {nombre:'Lucía',apellido:'Gonzalez'},
    {nombre:'Ricardo',apellido:'Perez'},
    {nombre:'Glottis',apellido:'Perez'},
    {nombre:'Fernanda',apellido:'Perez'},
]



const resultadoObjecto = objetos.filter(x => x.apellido == 'Gonzalez')



//Recorrer los elementos por nombre
for (let index = 0 ; index < resultadoObjecto.length; index++){
    const element = resultadoObjecto[index];
    console.log(element.nombre)

    
}


const frutasUno = ['Manzana','Pera','Banana', 'Naranja','Manzana','Naranja']
// Con este metodo cambiamos el nombre del elemento 
const resulMap  = frutasUno.map(x => {
    if(x == 'Manzana') return 'Naranja'

})

console.log(resulMap)


const frutasDos = ['Manzana','Pera','Banana', 'Naranja','Manzana','Naranja']
// Con este metodo cambia desde el indice que requerimos todos los elementos por un nombre que le indiquemos
const resultFill  = frutasDos.fill('Naranja', 1)

console.log(resultFill)


const frutasTres = ['Manzana','Pera','Banana', 'Naranja','Manzana','Naranja']
// Nos devuelve un string del elemento que queramos
const resultFind  = frutasTres.find(X => X == 'Pera')

console.log(resultFind)