function esParOImpar(numero) {
    if (numero % 2 == 0) {
        return 'El número ' + numero + ' es par.';
    } else {
        return 'El número ' + numero + ' es impar.';
    }
}

// Para usar la función y mostrar el resultado en pantalla, puedes hacer lo siguiente:
let numero = parseInt(prompt("Ingresa un número entero: "));
let esParImpar = esParOImpar(numero);
let confirmacion = confirm(esParImpar + "\n ¿Deseas continuar?");
if (confirmacion) {
    alert("Has seleccionado continuar");
} else {
    alert("Has seleccionado cancelar");
}
