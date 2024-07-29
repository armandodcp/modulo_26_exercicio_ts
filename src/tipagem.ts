function multiplicacao(primeiroNumero: number, segundoNumero: number): number {
    return primeiroNumero * segundoNumero;
}

function saudacao(nome: string): string {
    return 'Olá ' + nome;
}

const primeiroNumero: number = 2;
const segundoNumero: number = 6;

const resultadoMultiplicacao = multiplicacao(primeiroNumero, segundoNumero);
console.log(primeiroNumero + ' * ' + segundoNumero + ' = ' + resultadoMultiplicacao);

const nome: string = 'Armando';

const fraseSaudacao = saudacao(nome);
console.log(fraseSaudacao);