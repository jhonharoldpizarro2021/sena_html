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
var nombre;
var edad;
nombre = prompt('Ingrese su nombre:','');
edad = prompt('Ingrese su edad:','');
document.write('Hola ');
document.write(nombre);
document.write(' asi que tienes ');
document.write(edad);
document.write(' años');