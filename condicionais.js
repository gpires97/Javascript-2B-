console.log("Trabalhando com condicionais")

const idadeComprador = 15;
const estaAcompanhada = true;
const passagem = false;

const listaDestinos = new Array (
    `Salvador`,//0
    `São Paulo`,//1
    `Rio de Janeiro`//2
);

listaDestinos.push(`Curitiba`); //Adcionando elementos no Array

console.log("Destinos possíveis:");
console.log(listaDestinos);

if (idadeComprador >= 18 || estaAcompanhada == true){
    passagem == true;
    console.log("Comprador maior de idade!");
    listaDestinos.splice(1,1); //removendo item
}     else {
    console.log("Não é maior de idade e não posso vender.");
    }

console.log("Embarque: \n \n")

if(idadeComprador >=18 || passagem == true){
    console.log("Boa viagem");
}else {
    console.log("Você não pode embarcar.")
}

