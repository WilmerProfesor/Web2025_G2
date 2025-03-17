// const PI= 4.1416;

// const persona={nombre: "Juan", apellido: "paramo", edad: 18};
// const arreglo=[1,234,"ddfsd",[23,343],{nombre:"juan", apellido:"algo"}];

//-----------------------------------------

// let nombre= prompt("Ingrese su nombre"); //jOptionPane.showInputDialog()
// let edad= prompt("Ingrese su edad"); //jOptionPane.showInputDialog()
// alert("Edad  "+Number(edad)); // jOptionPane.showMessageDialog()

// console.log("Hola "+nombre);  // SOUT
//'_' "_" `_` 
// console.log(arreglo);

//-----------------------------------------

// let nombre="wilmer";
// console.log(`hola ${nombre}`);
// console.log('"hola mundo"');
// console.log("'hola mundo'");
// let varA=3;
// let varB="3";
// for (let index = 0; index < 10; index++) {
//     console.log(index);    
// }

//-----------------------------------------

// if(varA===varB){
//     console.log("Son iguales");
// }else{
//     console.log("Diferentes");
    
// }
// console.log(typeof(varA));
// console.log(typeof(varB));
// console.log(varB);


// for (let index = 0; index < 10; index++) {    
//     if(index===5){
//         continue
//     }
//     console.log(index);    
// }

//-----------------------------------------
// const object ={nombre: "Wilmer", apellido: "patiño", edad:37};
// for (const key in object) {
//     console.log(key+":"+object[key]);
// }

//-----------------------------------------

// const array =["Patiño", "Wilmer", 37];
// for (const index of array) {
//     console.log(index);
// }

//-----------------------------------------

// let pass=123;
// let dato=1;
// while(dato!=pass){
//     dato=prompt("Ingrese la contraseña")
// }
// let password=123;
// let ingresado=1;

// do{
//     ingresado=prompt("Ingrese la contraseña con do-while")
// }while(ingresado!=password)

//-----------------------------------------

// let elemento=document.g.getElementById("texto");
// elemento.innerHTML+="Hola mundo desde JS"

//-----------------------------------------

// const array =["Patiño", "Wilmer", 37];
// console.log(array.reverse());
// console.log(array);
//-----------------------------------------


// EJERCICIO
// Preguntar a un estudiante si desea agregar, eliminar o modificar
// una nota. Al leer la nota se debe RECALCULAR y MOSTRAR 
// el promedio del curso.
// Repetir la acción hasta que se indique que no se desean 
// agregar mas notas
// Al finalizar mostrar el promedio del curso.
//-----------------------------------------

// <<<<<<<< FUNCIONES >>>>>>>>
function suma(a, b) {
    return a+b;
}
console.log(suma(4,7));

// <<<<<<<< FUNCIONES ANONIMAS >>>>>>>>
const resta= function(a,b){
    return a-b;
}
console.log(resta(6,2));

// <<<<<<<< FUNCIONES FLECHA (ArrowFunctions) >>>>>>>>
// ()=>{}
// 1. con un solo parámetro: no necesita paréntesis
const tablaDel7= a =>{return a*7}
console.log(tablaDel7(5));

// 2. sin parámetros o con varios parámatros: necesita paréntesis:
const tablaDel7_v2= () =>{
    for (let i = 1; i <= 10; i++) {
        console.log("7 x "+i+" = "+(7*i));        
    }    
}
tablaDel7_v2();

const variable= (a,b)=>{
    return a-b;
}
console.log(variable(8,2));

// 3. con una sola línea de cuerpo:
const resta_v3=(a,b)=>{return a-b}
console.log(resta_v3(5,2));

const resta_v4=(a,b)=>a-b;
console.log(resta_v4(5,2));




