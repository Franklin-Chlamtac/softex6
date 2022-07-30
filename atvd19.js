class carro{
    constructor(modelo,ano,marca){
        this.modelo = modelo;
        this.ano = ano;
        this.marca = marca;
    }
    ligar(){
        console.log('ligando carro... ligou');
    }
    buzina(){
        console.log('bibiiii');
    }
    desligar(){
        console.log('Desligando carro... Desligou.');
    }
}
class cachorro{
    constructor(raça,cor,idade){
        this.raça = raça;
        this.cor = cor;
        this.idade = idade;

    }
    latir(){
        console.log('au au');
    }
    comer(){
        console.log('nham nham cachorro assado');
    }
    dormir(){
        console.log('zzzzzzz');
    }
}
class música{
    constructor(autor,volume,duração){
        this.autor = autor;
        this.volume = volume;
        this.duração = duração;
    }
    tocar(){
        console.log('tocando música');
    }
    passarmusica(){
        console.log('passando música');

    }
    pausar(){
        console.log('Pausando música');
    }
}



