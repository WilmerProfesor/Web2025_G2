// FUNCIONES DE ORDEN SUPERIOR
// Funciones que reciben como parámetro otra función
// Funciones que devuelven otra función


const mayorQue=(a, b)=>{
    return a>b
}
const mayorQue10=(n)=>{ return mayorQue(n, 10) }

console.log(mayorQue(3,2));
console.log(mayorQue10(13));


//JS tiene funciones de orden superior integradas

//forEach
// Recorre un array y ejecuta una función por cada elemento
const numeros=[1,2,3,4,5];
numeros.forEach((item)=>console.log(item*item));

// find
// Devuelve el primer elemento que cumple una condición

const arrayObjetos=[
    {id:1, nombre:'Juan', edad:20},
    {id:2, nombre:'Ana', edad:30},
    {id:3, nombre:'Pedro', edad:25}
];

const salida= arrayObjetos.find((item)=>item.id===2);
console.log(salida);

// filter
// Devuelve un array con los elementos que cumplen una condición
const salida2= arrayObjetos.filter((item)=>item.edad>20);
console.log(salida2);

// some
// Devuelve true si algún elemento cumple una condición
const salida3= arrayObjetos.some((item)=>item.edad<20);
console.log(salida3);

// every
// Devuelve true si todos los elementos cumplen una condición
const salida4= arrayObjetos.every((item)=>item.edad>=20);
console.log(salida4);

// map  
// Devuelve un array con el resultado de aplicar una función a cada elemento
const salida5= arrayObjetos.map((item)=>item.nombre);
console.log(salida5);

// reduce
// Devuelve un valor acumulado tras aplicar una función a cada elemento
const salida6= arrayObjetos.reduce((total, item)=>total+item.edad, 0);
console.log(salida6);

// sort
// Ordena los elementos de un array
const salida7= arrayObjetos.sort((a,b)=>a.edad-b.edad);
console.log(salida7);
const salida8= arrayObjetos.sort((a,b)=>b.edad-a.edad);
console.log(salida8);