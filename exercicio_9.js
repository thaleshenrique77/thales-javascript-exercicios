class Pessoa {
    constructor(nome, idade, profissao) {
      this.nome = nome;
      this.idade = idade;
      this.profissao = profissao;
    }
    exibirInfo() {
        return `Nome: ${this.nome} -  Idade: ${this.idade} - Profissão: ${this.profissao}`
    }
  }


const pessoa = new Pessoa("Thales", 22, "Estudante");

console.log(pessoa.exibirInfo());


