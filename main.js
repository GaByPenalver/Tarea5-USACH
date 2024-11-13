let nota1 = 6;
let nota2 = 8;
let nota3 = 9;
let nota4 = 2;
let nota5 = 5;
let nota6 = 10;

//Función para la suma de las notas
function suma() {
    let resultado = nota1 + nota2 + nota3 + nota4 + nota5 + nota6;
    return resultado;
}
document.write("<b>La suma de las notas es: </b>" + suma() + "<br>");


//Función para el promedio de las notas
function promedio() {
    let resultado = suma() / 6;
    return resultado;
}
document.write("<b> El promedio de las notas es: </b>" + promedio().toFixed(1) + "<br>");