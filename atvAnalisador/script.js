let num = document.querySelector(`input#fnum`)
let lista = document.querySelector(`select#flista`)
let res = document.querySelector(`div#res`)
let valores = []

function isNumero(n) {
    return Number(n) >= 1 && Number(n) <= 100
}

function inLista(n, l) {
    return l.indexOf(Number(n)) !== -1
}

function adicionar() {
    if (isNumero(num.value) && !inLista(num.value, valores)) {
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado.`
        lista.appendChild(item)
        res.innerHTML = '' // Limpa o resultado
    } else {
        window.alert('Valor inválido ou já encontrado na lista.')
    }
    num.value = ''
    num.focus()
}

function finalizar() {
    if (valores.length === 0) {
        window.alert('Adicione valores antes de finalizar!')
    } else {
        let tot = valores.length
        let maior = Math.max(...valores)
        let menor = Math.min(...valores)
        let soma = valores.reduce((acc, cur) => acc + cur, 0)
        let media = soma / tot

        res.innerHTML = `
            <p>Ao todo, temos <strong>${tot}</strong> números cadastrados.</p>
            <p>O maior valor informado foi <strong>${maior}</strong>.</p>
            <p>O menor valor informado foi <strong>${menor}</strong>.</p>
            <p>A soma de todos os valores é <strong>${soma}</strong>.</p>
            <p>A média dos valores é <strong>${media.toFixed(2)}</strong>.</p>
        `
    }
}
