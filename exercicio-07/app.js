/*
  01

  - Inverta o valor dos booleans do console.log() abaixo;
  - O resultado exibido no console deve ser: false true.
*/

console.log(true, false)
console.log(!true, !false)


/*
  02

  - Abaixo do array "animals", verifique se o animal "leão" **não** existe no  
    array. Se não existir, exiba no console a mensagem "Leão não existe no array  
    animals.";
  - Se existir, exiba no console a mensagem "Existe um leão no array animals.".
*/

const animals = ['macaco', 'tucano', 'elefante', 'pavão', 'hipopótamo']
if(!animals.includes('leão')){
  console.log('Leão não existe no array animals')
}else{
  console.log('Existe um leão no array animals')
}


/*
  03

  - Some os números do array abaixo;
  - Se durante a soma, o resultado ultrapassar 400, pare a operação e exiba  
    a frase abaixo no console, substituindo "RESULTADO_DA_SOMA" pelo valor  
    correto.
  
  "A soma ultrapassou 400. Até aqui, o valor atual é RESULTADO_DA_SOMA."
*/

const randomNumbers = [59, 61, 73, 57, 35, 73, 21, 87, 43]
let result = 0

for (let i = 0; i < randomNumbers.length; i++){
 
  if(result > 400 ){
    console.log(`A soma ultrapassou 400. Até aqui, o valor atual é ${result}`)
    break
  }
  result += randomNumbers[i]
}
console.log(result)

/*
  04

  - Concatene as strings do array abaixo, formando uma frase;
  - Se durante a concatenação a palavra "certeza" existir, ela não deve ser  
    concatenada;
  - Exiba a frase no console.
*/

const sentence = ['A', 'certeza', 'dúvida', 'é', 'o', 'princípio', 'da', 'sabedoria.']

let newSentence = '' 

for (let i = 0; i < sentence.length; i++){
  if(sentence[i] == 'certeza'){
    continue
  }
  newSentence += `${sentence[i]} `
}
console.log(newSentence)

/*
  05

  - Itere sobre o array "randomValues" apenas até a 4ª string dele;
  - Exiba a string abaixo no console, mantendo a formatação de lista e inserindo  
    as informações corretas:

  "
    3 informações sobre o array randomValues:
      - As primeiras 4 strings são XX, XX, XX e XX;
      - Até que as primeiras 4 strings fossem iteradas, XX booleans foram iterados;
      - O array foi iterado por XX vezes.
  "
*/

const randomValues = [57, false, 'JS', [], true, 'HTML', 31, null, false, 'CSS', 97, true, 'Git', 11, 'sticker', false, 'GitHub', true, null]

let stringsAmount = 0
let booleansAmount = 0
let firstFourStrings = []
let totalIterations = 0


for (let i = 0; i < randomValues.length; i++){
  const item = randomValues[i]
  const typeOfItem = typeof item
  const isItemString = typeOfItem === 'string'
  const isItemBoolean =  typeOfItem === 'boolean'


  if (stringsAmount === 4){
    break
  }

  if (isItemString){
    stringsAmount++
    firstFourStrings.push(randomValues[i])
  }

  if (isItemBoolean){
    booleansAmount++
  }

  totalIterations++
}

const lasItem = firstFourStrings[firstFourStrings.length-1]
fourStrings = firstFourStrings.join(', ').replace(`, ${lasItem}`, ` e ${lasItem}`)


console.log(`3 informações sobre o array randomValues:
  - As primeiras 4 strings são ${fourStrings};
  - Até que as primeiras 4 strings fossem iteradas, ${booleansAmount} booleans foram iterados;
  - O array foi iterado por ${totalIterations} vezes.`)

/*
  06

  - Descomente a constante abaixo atribua a ela algum tipo de bebida. Exemplo:  
    água, refrigerante ou suco;
  - Utilize um switch statement com cases para essas 3 possibilidades de bebida;
  - Se o tipo da bebida é água, atribua à uma variável a mensagem "Substância 
    química cujas moléculas são formadas por dois átomos de hidrogênio e um de 
    oxigênio.";
  - Se o tipo da bebida é refrigerante, a mensagem "Bebida não alcoólica e não 
    fermentada, fabricada industrialmente, à base de água mineral e açúcar." 
    deve ser armazenada;
  - Se é suco, atribua a mensagem "Bebida produzida do líquido extraído de 
    frutos.";
  - Se nenhum desses 3 tipos de bebida der match, a variável deve armazenar 
    "Bebida desconhecida.";
  - Exiba a mensagem no console. Teste também as outras possibilidades de tipo  
    da bebida além da que você escolheu.
*/

const drinkType = 'agua'
let drinkMessage = null

switch(drinkType){
  case 'agua':
    drinkMessage = 'Substância química cujas moléculas são formadas por dois átomos de hidrogênio e um de oxigênio.'
    break
  case 'refrigetante'  :
    drinkMessage = 'Bebida não alcoólica e não fermentada, fabricada industrialmente, à base de água mineral e açúcar.'
    break

  case 'suco':
    drinkMessage = 'Bebida produzida do líquido extraído de frutos.'  
    break

  default:
    drinkMessage = 'Bebida desconhecida'  
  }

  console.log(drinkMessage)
/*
  07

  - Reescreva o código comentado abaixo, utilizando um switch statement;
  - Depois de escrever o switch, modifique o valor da declaração da const "a"  
    para testar o switch que você escreveu.
*/

const number = 2

// if (a === 0) {
//   console.log(`O valor de "a" é ${a}`)
// } else if (a === 1) {
//   console.log(`O valor de "a" é ${a}`)
// } else {
//   console.log('O valor de "a" é qualquer número, exceto 0 e 1')
// }

switch (number){
  case 0:
    console.log(`O valor de "number" é ${number}`)
    break
  
  case 1:
    console.log(`O valor de "number" é ${number}`)
    break
  
  default:
    console.log(`O valor de "number" é qualquer número, exceto 0 e 1`)
    break
  
}


// let isUserLoggedIn = false;

// if (!isUserLoggedIn){
//   console.log('Voce precisa fazer login pra continuar...')
// }

// // ============================================================

// const scores = [50, 25, 0, 30, 100, 20, 10]

// for (let i = 0; i < scores.length; i++){
// if(scores[i] === 0){
//   continue
// }

//   console.log(`sua pontuação ${scores[i]}`)

//   if (scores[i] === 100){
//     console.log('Parabéns, você conseguiu atingir o máximo de pontos')
//     break
//   }
// }

// console.log('=========================================================================')

// // switch statement

// const grade = 'B'

// switch (grade){
//   case 'A':
//     console.log('Voce tirou um A')
//     break
//     case 'B':
//     console.log('Voce tirou um B')
//     break
//   case 'C':
//     console.log('Voce tirou um C')
//     break
//   case 'D':
//     console.log('Voce tirou um D')
//     break
//   default:
//     console.log('Nota inválida')  


// }