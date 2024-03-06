var notas  = {nota1: 10, nota2: 9, nota3: 8};

function calcularMedia() {
  media = (notas.nota1 + notas.nota2 + notas.nota3) / 3
  return media
}


function calcularSituacao(media) {
  var situacao;  
  if (media >= 7) {
    situacao = "Aprovado!";
  } else if (media < 7) {
    situacao = "Reprovado!";
  }

  return situacao;
}


var media_aluno = calcularMedia(notas.nota1, notas.nota2, notas.nota3);


console.log("A primeira nota do aluno é: " , notas.nota1)
console.log("A segunda nota do aluno é: " , notas.nota2)
console.log("A terceira nota do aluno é: " , notas.nota3)
console.log("A média do aluno é: ", media_aluno);
console.log("O aluno está:", calcularSituacao(media_aluno));
