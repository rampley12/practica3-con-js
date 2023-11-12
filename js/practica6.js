function calcularPerimetroRectangulo(ladoA, ladoB) {
    let perimetro = 2 * (ladoA + ladoB);
    return perimetro;
}

// Solicitar al usuario los valores de los lados del rectángulo
let ladoA = parseInt(prompt("Ingresa el valor del lado A del rectángulo: "));
let ladoB = parseInt(prompt("Ingresa el valor del lado B del rectángulo: "));

// Calcular el perímetro del rectángulo
let perimetro = calcularPerimetroRectangulo(ladoA, ladoB);

// Mostrar el resultado por pantalla
alert("El perímetro del rectángulo es: " + perimetro);
