
// phone js
document.getElementById('phome-plus').addEventListener('click', function () {

    pluse('phone-input');

    pricePlusMinus('phone-input', 1219, 'phone-price')

    subtotal('phone-price', 'back-price')



})

document.getElementById('phone-minus').addEventListener('click', function () {

    minus('phone-input')

    pricePlusMinus('phone-input', 1219, 'phone-price')

    subtotal('phone-price', 'back-price')


})


// back js
document.getElementById('back-pluse').addEventListener('click', function () {

    pluse('back-input')
    pricePlusMinus('back-input', 59, 'back-price')
    subtotal('phone-price', 'back-price')

})



document.getElementById('back-minus').addEventListener('click', function () {

    minus('back-input')
    pricePlusMinus('back-input', 59, 'back-price')
    subtotal('phone-price', 'back-price')
})


document.getElementById('tax').addEventListener('keyup', function () {

    const getSubValue = getPriceElement('subtotal');

    const getTaxValue = getInputValue('tax');

    const getPersenteg = (getSubValue * getTaxValue) / 100;

    const total = getSubValue + getPersenteg;

    setElementInTextPrice('total', total)


  
})