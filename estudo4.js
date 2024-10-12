
//construção de uma classe 
class Dados{
    //instância do objeto
    constructor(nome, idade){
        this.nome  = nome
        this.idade  = idade 
    }
    //não precisa chamar function quando vamos construir um método de uma classe ou objeto 
    exibirdados(){
        return `Meu nome é ${this.nome} e tenho ${this.idade} !`
    }
}

var obj = new Dados('Mateus', 19) //instânciando o objeto, dessa forma pegando todos os atributos que a classe dados possui
console.log(obj.exibirdados())