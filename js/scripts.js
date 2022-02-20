window.addEventListener('load', asignarEventos, false);
function asignarEventos() {
    document.getElemensById('menu1').addEventListener('click', clic1, false);
    document.getElemensById('menu2').addEventListener('click', clic2, false);
    document.getElemensById('menu3').addEventListener('click', clic3, false);
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