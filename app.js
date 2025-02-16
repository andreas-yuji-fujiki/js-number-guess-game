// obtendo o numero que o usuario digitou:
let secretNumber = prompt('Escolha um número entre 1 e 30');

// verificando se o número é valido:
if( Number(secretNumber) > 30 ){
    alert(`Erro! O número ${secretNumber} é maior que 30!`)
} else if( Number(secretNumber) < 1 ){
    alert(`Erro! O número ${secretNumber} é menor que 1!`)
} else {
    // mensagem de sucesso
    alert(`Sucesso! Você digitou o número ${secretNumber}`)
}

if( Number(secretNumber) === 12) {
    const documentBody = document.querySelector('body')
    
    // background color
    documentBody.style.backgroundColor = 'red'
    // text
    documentBody.innerHTML += `<h1>Aloo!</h1>`

    documentBody.style.transform = 'rotate(180deg)'
}