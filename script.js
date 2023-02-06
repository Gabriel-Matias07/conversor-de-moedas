alert('Vamos converter dólar para real.')
var valorEmdolar     = parseFloat(prompt('Valor em dólar:'))
var cotacaoDolar = 5.20
cotacaoDolar = cotacaoDolar.toFixed(2)
var valorEmReal = valorEmdolar * cotacaoDolar
valorEmReal = valorEmReal.toFixed(2)
alert('US$' + valorEmdolar + ' é igual a R$' + valorEmReal + ' levando em conta R$' +cotacaoDolar+ ' como cotação do dólar.')