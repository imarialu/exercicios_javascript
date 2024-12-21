// Escreva um programa que recebe um número e verifica se ele é positivo, negativo ou zero.

function verificar(num){
   if(num > 0){
      console.log("O número é positivo!");
   }
   else if(num < 0){
      console.log("O número é negativo!")
   }
   else{
      console.log("O número é zero.")
   }
}

verificar(10); // Imprime: O número é positivo!
verificar(-10); // Imprime: O número é negativo!
verificar(0); // Imprime: O número é zero.