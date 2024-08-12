console.log("Trabalhando com listas");

const salvador = 'Salvador';
const saoPaulo = 'São Paulo';
const rioDeJaneiro = 'Rio de janeiro';

const listaDestinos = new Array (
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);

listaDestinos.push(`Curitiba`); //Adcionando elementos no Array

console.log("Destinos possíveis:");
console.log(listaDestinos);

//listaDestinos.splice(1,2); Removendo elementos do Array

//console.log(listaDestinos);

console.log(listaDestinos[0],listaDestinos[2])