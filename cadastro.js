let readlineSync = require('readline-sync');
var nomePeca;
var pesoPeca;
var capacidade = 11;

nomePeca = readlineSync.question("Digite o nome da peça: ");


pesoPeca = readlineSync.question("Digite o peso em Kgfm: ");

if (pesoPeca > 100){
    //condição verdadeira

    if(capacidade > 10){
       //condição verdadeira
        console.log("Não cadastrar! capacidade maxima atingida!");
        }else if(nomePeca.length < 3){
        //condição falsa
            console.log("Não cadastrar, Nome da peça invalido");
        }
        else{
            console.log("Peça cadastrada com sucesso")

        }

}else{
    //condição falsa
    console.log("Não cadastrar! Peso insuficiente");
}
