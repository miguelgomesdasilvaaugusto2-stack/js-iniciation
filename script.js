const nome = 'Abnelson';
const idade = 33;
const cidade = 'Cidade das marmitas congeladas';

console.log(`Olá! Meu nome é ${nome}, moro na ${cidade}, e tenho ${idade} anos!`);


const anoDeNascimento = 1906;
// anoDeNascimento = 3000; Uncaught TypeError: Assignment to constant variable. PERCEBI

let idadeAtual = 98;
idadeAtual = 99;
console.log(idadeAtual); //FOI CERTINHO!



const valorJantar = 150;
const gorjeta = 0.15;

let numAmigos = 3;
let valorTotal = valorJantar + (valorJantar * gorjeta);
let valorDividido = valorTotal / numAmigos;

console.log(`O valor da janta foi de ${valorTotal} reais. Cada amigo (${numAmigos}) pagará ${valorDividido} reais.`);





let usuarioLogado = false;
console.log('Status inicial:', usuarioLogado);
usuarioLogado = true;
console.log('Status de agora', usuarioLogado);





let estoqueCamisetas = 50;
estoqueCamisetas -= 15;
estoqueCamisetas -= 12;
console.log('Quantidade de camisetas disponíveis:', estoqueCamisetas);





let primeiroNome, nomeDoMeio, sobrenome;

primeiroNome = 'Fileblinga';
nomeDoMeio = 'Jairson';
sobrenome = 'Oliveira';
nomeCompleto = primeiroNome + " " + nomeDoMeio + " " + sobrenome;

console.log(nomeCompleto);







const comp = 4;
const larg = 10;

let area = 4 * 10;
console.log(`Dado o valor do comprimento (${comp}) e da largura (${larg}), o valor do terreno é de ${area}.`);






const productName = 'Bebê com tosse';
let productValue = 10;
let productIfFreteGratis = true;
let productPromotion = productValue - (productValue * 0.15);

console.log(`O valor do ${productName} custa ${productPromotion} com desconto e o status do frete é: ${productIfFreteGratis}`);
