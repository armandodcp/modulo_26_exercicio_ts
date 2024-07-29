"use strict";
function multiplicacao(primeiroNumero, segundoNumero) {
    return primeiroNumero * segundoNumero;
}
function saudacao(nome) {
    return 'Olá ' + nome;
}
const primeiroNumero = 2;
const segundoNumero = 6;
const resultadoMultiplicacao = multiplicacao(primeiroNumero, segundoNumero);
console.log(primeiroNumero + ' * ' + segundoNumero + ' = ' + resultadoMultiplicacao);
const nome = 'Armando';
const fraseSaudacao = saudacao(nome);
console.log(fraseSaudacao);
