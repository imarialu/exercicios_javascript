// Escreva um programa que verifica se uma pessoa pode votar com base na idade.

function verificarIdade(idade){
   if((idade >= 16 && idade < 18) || idade >= 70){
      console.log("O seu voto é facultativo.");
   }
   else if(idade >= 18 && idade < 70){
      console.log("O seu voto é obrigatório.");
   }
   else{
      console.log("Você não pode votar.")
   }
}

verificarIdade(17); // Imprime: O seu voto é facultativo.
verificarIdade(21); // Imprime: O seu voto é obrigatório.
verificarIdade(85); // Imprime: O seu voto é facultativo.
verificarIdade(14); // Imprime: Você não pode votar.