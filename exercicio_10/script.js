/* Escreva um programa que recebe duas notas de um aluno, calcula a média e imprime
   se o aluno foi aprovado ou reprovado (considerando que a média para aprovação é 7).
*/

function calcularMedia(nota1, nota2){
   let media = (nota1 + nota2)/2;
   if(media >= 7){
      console.log("Aluno aprovado! Média: " + media);
   }
   else{
      console.log("Aluno reprovado. Média: " + media);
   }
}

calcularMedia(5, 5); // Imprime: Aluno reprovado. Média: 5
calcularMedia(10, 8); // Imprime: Aluno aprovado! Média: 9