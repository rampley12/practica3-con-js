/* */

let dado1 = 0;
let dado2 = 0;
let suma = 0;

const sumasResultado = [];

for (let i = 0; i < 50; i++) {
    dado1 = Math.floor(Math.random() * 6) + 1;
    dado2 = Math.floor(Math.random() * 6) + 1;
  suma = dado1 + dado2;
  sumasResultado[i] = suma;
}

let suma2 = 0,
  suma3 = 0,
  suma4 = 0,
  suma5 = 0,
  suma6 = 0,
  suma7 = 0,
  suma8 = 0,
  suma9 = 0,
  suma10 = 0,
  suma11 = 0,
  suma12 = 0;

for (let j = 0; j < 50; j++) {
  switch (sumasResultado[j]) {
    case 2:
      suma2 += 1;
      break;
    case 3:
      suma3 += 1;
      break;
    case 4:
      suma4 += 1;
      break;
    case 5:
      suma5 += 1;
      break;
    case 6:
      suma6 += 1;
      break;
    case 7:
      suma7 += 1;
      break;
    case 8:
      suma8 += 1;
      break;
    case 9:
      suma9 += 1;
      break;
    case 10:
      suma10 += 1;
      break;
    case 11:
      suma11 += 1;
      break;
    case 12:
      suma12 += 1;
      break;
      case 13:
      suma13 += 1;
      break;
  }
}
document.write(`
<table class = "table table-striped text-center">
<thead>
  <tr>
    <th>dado 1</th><th>dado 2</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>8</td><td>${suma2}</td>
  </tr>
  <tr>
    <td>6</td><td>${suma3}</td>
  </tr>
  <tr>
    <td>4</td><td>${suma4}</td>
  </tr>
  <tr>
    <td>5</td><td>${suma5}</td>
  </tr>
  <tr>
    <td>6</td><td>${suma6}</td>
  </tr>
  <tr>
    <td>7</td><td>${suma7}</td>
  </tr>
  <tr>
    <td>8</td><td>${suma8}</td>
  </tr>
  <tr>
    <td>9</td><td>${suma9}</td>
  </tr>
  <tr>
    <td>10</td><td>${suma10}</td>
  </tr>
  <tr>
    <td>11</td><td>${suma11}</td>
  </tr>
  <tr>
    <td>12</td><td>${suma12}</td>
  </tr>
</tbody>
</table>`)