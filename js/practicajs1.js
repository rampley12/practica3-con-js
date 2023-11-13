
const Meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];

//mostrar un array
console.log(Meses);


document.write('<h2>Lista de Meses </h2>')
document.write('<ul>')
for(let indiceMeses = 0; indiceMeses < Meses.length; indiceMeses++){
    document.write(`<li>${Meses[indiceMeses]}</li>`)
}
document.write('</ul>');