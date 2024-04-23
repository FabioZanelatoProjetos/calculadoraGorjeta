function formatMoney(value){
    value = Math.ceil(value * 100) / 100 /* O objeto Build in 'Math' puxou o ceil para 
    arredondar para cima (todo o valor) e (value * 100 ) / 100 foi setado para não 
    arrendodar muita coisa tipo 5,80 arredondaria para 6,00*/
    value = value.toFixed(2) // toFixed salva os valores com apenas 2 casas Ex: 10, 15
    return 'R$'+ value

}

function formatSplit(value) {
    if(value == 1) return value + ' pessoa'
    return value + ' pessoas'
}

function update() {
    let bill = Number(document.getElementById('yourBill').value)
    let tipPercent = document.getElementById('tipInput').value
    let split = document.getElementById('splitInput').value

    let tipValue = bill * (tipPercent / 100)
    let billTotal = bill + tipValue
    let billEach = billTotal / split

    document.getElementById('tipPercent').innerHTML = tipPercent + ' %'
    document.getElementById('tipValue').innerHTML = formatMoney(tipValue)
    document.getElementById('totalWithTip').innerHTML = formatMoney(billTotal)
    document.getElementById('splitValue').innerHTML = formatSplit(split)
    document.getElementById('billEach').innerHTML = formatMoney(billTotal / split)
    

}