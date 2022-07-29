let firstNumber = prompt("Digite o primeiro número")
let secondNumber = prompt("Digite o segundo número")

firstNumber = Number(firstNumber)
secondNumber = Number(secondNumber)

const sum = firstNumber + secondNumber
const sub = firstNumber - secondNumber
const mult = firstNumber * secondNumber
const div = firstNumber / secondNumber
const restDiv = firstNumber % secondNumber



alert (`A soma é ${sum}`)
alert (`A subtração é ${sub}`)
alert (`A multiplicação é ${mult}`)
alert (`A divisão é ${div}`)
alert (`A resto da divisão é ${restDiv}`)

if (sum % 2 == 0) {
    alert (" Os dois número da soma são par")
} 
else {
    alert (" Os dois número da soma são impar")
}

if(firstNumber === secondNumber){
    alert("Os números inseridos são iguais")
}else{
    alert("Os números inseridos são diferentes")
}