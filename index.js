// // Exercício 1

let k = 0
let soma = 0
for (let i = 13; k < i; k++) {
  soma += k
  console.log(k, soma)
}
console.log(`O valor final de Soma será: ${soma}`)


// //  Exercício 2
function fibonaci(num) {
  if (num < 0) {
    return "O número deve ser positivo.";
  } else if (num === 0) {
    return [0];
  } else if (num === 1) {
    return [0, 1];
  } else {
    let fibNumbers = [0, 1];
    for (let i = 2; i <= num; i++) {
      fibNumbers.push(fibNumbers[i - 1] + fibNumbers[i - 2]);
    }
    if (fibNumbers.includes(num)) {
      return fibNumbers + "\nO número " + num + " pertence à sequência de Fibonacci.";
    } else {
      return fibNumbers + "\nO número " + num + " não pertence à sequência de Fibonacci.";
    }
  }
}

console.log(fibonaci(21));

// Exercício 3

// a) 1, 3, 5, 7, (_9_) - ímpares

// b) 2, 4, 8, 16, 32, 64, (_128_) - dobro

// c) 0, 1, 4, 9, 16, 25, 36, (_49_) - quadrado

// d) 4, 16, 36, 64, (_100_) - pares ao quadrado

// e) 1, 1, 2, 3, 5, 8, (_13_) - fibonacci como no ex anterior

// f) 2,10, 12, 16, 17, 18, 19, (_200_) - numeros que começam com d

// Exercício 4

console.log(`Caso eles se encontrem, ambos estarão no mesmo ponto da estrada, com a mesma distância para ambas as cidades.`)

// Exercício 5

let string = "ivan"
let palavraInverida = []

for (let i = 0; i < string.length; i++) {
  let letra = string.charAt(i)
  palavraInverida.push(letra)
  console.log(palavraInverida.join(""))
}