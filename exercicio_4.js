var notas  = {nota1: 10, nota2: 9, nota3: 8};



function calcularMedia() {
    media = (notas.nota1 + notas.nota2 + notas.nota3) / 3
    return media
}



console.log("A primeira nota do aluno é: " , notas.nota1)
console.log("A segunda nota do aluno é: " , notas.nota2)
console.log("A terceira nota do aluno é: " , notas.nota3)


console.log("A média do aluno é: " , calcularMedia(notas.nota1 ,notas.nota2, notas.nota3))


