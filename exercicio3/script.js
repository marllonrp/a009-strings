//Crie a const para a frase aqui

const frase =
  'Jorge tem uma casa verde e com portão azul, com os dizeres: "BOAS VINDAS, mas não deixe o gato sair"';

let newfrase = frase.replace("verde", "rosa").replace("azul", "laranja");

console.log(frase);
console.log(newfrase);

let maiuscula = "mas não deixe o gato sair";

novafrase = newfrase.replace(
  "mas não deixe o gato sair",
  maiuscula.toUpperCase()
);
console.log(novafrase);
