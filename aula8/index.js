// Luiz Otavio de Miranda tem 30 anos, pesa 84 kg tem 1.8 de altura e seu INC é de 25.949484834
const nome = "Luiz Otavio";
const sobrenome = "Miranda";
const idade = 30;
const peso = 84;
const altura = 1.8;
let imc = peso / (altura * altura);
let anonascimento = 2024 - idade;

console.log (`${nome} ${sobrenome} tem ${idade} anos, nascido no ano de  ${anonascimento}  pesa ${peso} kg tem ${altura} de altura e seu IMC é de ${imc}` );

