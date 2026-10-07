// cotação de moedas do dia 

const USD = 4.98
const EUR = 5.61
const GBP = 6.61


// obtendo os elementos do DOM

const form = document.querySelector('form')
const amount = document.getElementById('amount')
const currency = document.getElementById('currency')
const footer = document.querySelector('main footer')
const description = document.getElementById('description')
const result = document.getElementById('result')



// manipulação do input amount
amount.addEventListener('input',() =>  {
    console.log(amount.value)
    // expressão regex 
    const hasCharactersRegex = /\D+/g 
    amount.value = amount.value.replace(hasCharactersRegex, '')
    // console.log(amount.value)
})

// CAPTAÇÃO DO EVENTO DE ENVIAR
form.onsubmit = (event) => {
    event.preventDefault()
    console.log(amount.value)
    console.log(currency.value)

    switch(currency.value) {
       case 'USD':
        convertCurrency(amount.value, USD, 'USD')
        break

        case 'EUR':
        convertCurrency(amount.value, EUR, 'EUR')
        break

        case 'GBP':
        convertCurrency(amount.value, GBP, 'GBP')
        break
    }
}

//FUNÇÃO PARA CONVERTER VALORES
function convertCurrency(amount, price, symbol){
   // console.log(amount,price,symbol)

   try {
    // exibir o resultado 
    description.textContent = ` ${symbol} 1 = ${formatcurrencyBRL(price)} `
    
    let total = amount * price
    
    result.textContent = `${formatcurrencyBRL(total).replace('R$', '')} Reais`

    // mostrar o resultado no footer
     footer.classList.add("show-result")

    


   } catch(error){
    console.log(error)
   }
}

// formação para real brasileiro
function formatcurrencyBRL(value) {
    return Number(value).toLocaleString('pt-BR', {
        
        style: 'currency',
        currency: 'BRL'
    })
    
}





