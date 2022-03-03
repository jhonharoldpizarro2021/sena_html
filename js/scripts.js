window.addEventListener('load', asignarEventos, false);
function asignarEventos() {
    document.getElementById('menu1').addEventListener('click', click1, false);
    document.getElementById('menu2').addEventListener('click', click2, false);
    document.getElementById('menu3').addEventListener('click', click3, false);
}
function click1() {
    window.alert('Hizo click en el menu 1');
}
function click2() {
    window.alert('Hizo click en el menu 2');
}
function click3() {
    window.alert('Hizo click en el menu 3');
}

/* 
var nombre = 'Jhon';
var edad = '28';
var altura = '1.92';
var casado = false;
document.write(nombre);
document.write('<br/>');
document.write(edad);
document.write('<br/>');
document.write(altura);
document.write('<br/>');
document.write(casado);
*/

/* var nombre;
var edad;
nombre = prompt('Ingrese su nombre:','');
edad = prompt('Ingrese su edad:','');
document.write('Hola ');
document.write(nombre);
document.write(' asi que tienes ');
document.write(edad);
document.write(' años'); */

/* var v1;
var v2;
v1 = prompt('Ingrese primer numero:','');
v2 = prompt('Ingrese segundo numero:','');
var suma = parseInt(v1)+parseInt(v2);
var producto = parseInt(v1)*parseInt(v2);
document.write('La suma es ');
document.write(suma);
document.write('<br>');
document.write('El producto es ');
document.write(producto); */

/* let nombre;
let nota;
nombre = prompt('Ingrese nombre:','');
nota = prompt('Ingrese su nota:','');
if(nota>=4){
    document.write(nombre+' esta aprobado con un '+nota);
} */

/* let n1, n2;
n1 = prompt('Ingrese primer numero');
n2 = prompt('ingrese segundo numero');
n1 = parseInt(n1);
n2 = parseInt(n2);
if(n1>n2){
    document.write('el numeor mayor es '+n1);
} else{
    document.write('el numeor mayor es '+n2);
} */

/* let n1, n2, n3;
n1 = prompt('Ingrese 1ra nota:','');
n2 = prompt('Ingrese 2da nota:','');
n3 = prompt('Ingrese 3ra nota:','');
//
n1 = parseInt(n1);
n2 = parseInt(n2);
n3 = parseInt(n3);
let pro;
pro = (n1+n2+n3)/3;
if(pro>=7){
    document.write('promocionado');
} else{
    if(pro>=4){
        document.write('regular');
    } else{
        document.write('reprobado');
    }
} */

let parrafo = document.createElement('p');
let contenido = document.createTextNode('Hola Mundo!');
parrafo.appendChild(contenido);
document.body.appendChild(parrafo);