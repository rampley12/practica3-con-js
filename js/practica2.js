// Crear un arreglo vacío
var ciudades = [];

// Solicitar nombres de ciudades al usuario y almacenarlos en el arreglo
var ciudad = prompt("Ingresa el nombre de una ciudad: ");
while (ciudad) {
    ciudades.push(ciudad);
    ciudad = prompt("Ingresa el nombre de otra ciudad: ");
}

// Mostrar el arreglo generado
document.write(`<p>Arreglo de ciudades:   ${ciudades.join(", ")}</p>` );

// Mostrar la longitud del arreglo
document.write(`<p>El arreglo de ciudades tiene   ${ciudades.length}   elementos</p>`);

// Mostrar en el documento web los ítems de las posiciones primera, tercera y última
document.write(`<p>Elemento 1er posición:  ${ciudades[0]}</p>` );
document.write(`<p>Elemento 2dp posición:  ${ciudades[1]}</p>` );
document.write(`<p>Elemento 3er posición: ${ciudades[2]} </p>`);
document.write(`<p>Elemento última posición: ${ciudades[ciudades.length - 1]}</p> `);

// Añade en última posición la ciudad de París
ciudades.push("París");
document.write(`<p>Elemento última posición después de añadir París:${ciudades[ciudades.length - 1]} </p> `);

// Escribe por pantalla el elemento que ocupa la segunda posición
document.write(`<p>Elemento 2da posición:  ${ciudades[1]}</p>`);

// Sustituye el elemento que ocupa la segunda posición por la ciudad de 'Barcelona'
ciudades[1] = "Barcelona";
document.write(`<p>Elemento 2da posición después de reemplazar por Barcelona: ${ciudades[1]} </p>`);

// Mostrar el arreglo final
document.write(`<p>Arreglo de ciudades final:</p> ` + ciudades.join(", "));

document.write('<h2>Lista de ciudades </h2>')
document.write('<ul>')
for(let indiceciudades = 0; indiceciudades < ciudades.length; indiceciudades++){
    document.write(`<li>Elemento: ${ciudades[indiceciudades]}</li>`)
}
document.write('</ul>');