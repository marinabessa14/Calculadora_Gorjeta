function formatMoney(value) {             // função para formatar o dinheiro
    value = Math.ceil(value * 100) / 100  //pegando o valor e arredondando para mais
    value = value.toFixed(2) // fixando o valor decimal 
    return '$ ' + value 
} 

function formatSplit(value) {
    if (value == 1) return value + ' person'  // fazendo uma verificação que se for igual a 1 é uma pessoa se não, vai ser pessoas
    return value + ' people'
}


function update() {
    let bill = Number(document.getElementById('yourBill').value) //conta
    let tipPercent = document.getElementById('tipInput').value // porcentagem
    let split = document.getElementById('splitInput').value // dividir

    let tipValue = bill * (tipPercent / 100) // dividindo a porcentagem e multiplicando a conta 
    let billTotal = bill + tipValue // somando o resultado da conta + o tipvalue
    let billEach = billTotal / split  // pegando a conta e dividindo pela quantidade de pessoas

    document.getElementById('tipPercent').innerHTML = tipPercent + ' %'
    document.getElementById('tipValue').innerHTML = formatMoney(tipValue)
    document.getElementById('totalWithTip').innerHTML = formatMoney(billTotal)
    document.getElementById('splitValue').innerHTML = formatSplit(split)
    document.getElementById('billEach').innerHTML = formatMoney(billTotal / split)
}