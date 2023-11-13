function generarTablaMultiplicar(numero) {
    let tabla = "<table>";
    for (let i = 1; i <= 10; i++) {
      let resultado = numero * i;
      tabla += "<tr><td>" + numero + " x " + i + "</td><td>=</td><td>" + resultado + "</td></tr>";
    }
    tabla += "</table>";
    document.body.innerHTML = tabla;
  }
  
  // Solicitar al usuario que ingrese un número
  let numero = parseInt(prompt("Ingresa un número para generar su tabla de multiplicar: "));
  
  // Generar la tabla de multiplicar utilizando la función generarTablaMultiplicar y mostrarla en el body del documento HTML
  generarTablaMultiplicar(numero);
  