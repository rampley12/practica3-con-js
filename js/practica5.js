function analizarCadena(cadena) {
    if (cadena === cadena.toUpperCase()) {
        return 'La cadena "' + cadena + '" está formada sólo por mayúsculas.';
    } else if (cadena === cadena.toLowerCase()) {
        return 'La cadena "' + cadena + '" está formada sólo por minúsculas.';
    } else {
        return 'La cadena "' + cadena + '" está formada por una mezcla de mayúsculas y minúsculas.';
    }
}

// Para usar la función y mostrar el resultado en pantalla, puedes hacer lo siguiente:
const cadena = prompt("Ingresa una cadena de texto: ");
const resultado = analizarCadena(cadena);
const confirmacion = confirm(resultado + "\n ¿Deseas continuar?");
if (confirmacion) {
    alert("Has seleccionado continuar");
} else {
    alert("Has seleccionado cancelar");
}
