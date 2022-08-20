// get value funcation from inputs

function getInputValue(id){
    const getInput = document.getElementById(id);
    const getInputNumber = parseInt(getInput.value);
    return getInputNumber;
}

// set value funcation from inputs
function setElementInText(id, value) {
    const getSetElementId = document.getElementById(id);
    getSetElementId.value = value;

  }

  // pluse + 1 value funcation from inputs btn
  function pluse(id){
    const getInputValues = getInputValue(id);
    const pluseOne = getInputValues + 1;
    setElementInText(id, pluseOne)
    // console.log(typeof pluseOne)

  }

   // minus - 1 value funcation from inputs btn
  function minus(id){
    const getInputValues = getInputValue(id);
    const pluseOne = getInputValues - 1;
    setElementInText(id, pluseOne)
    // console.log(typeof pluseOne)

  }


// get innerText  funcation from prices

function getPriceElement(elementId){
    const getElemment = document.getElementById(elementId);
    const getElemmentNumber = parseInt(getElemment.innerText);
    return getElemmentNumber;
}


// set innerText  funcation from prices
function setElementInTextPrice(id, value) {
    const getSetElementId = document.getElementById(id);
    getSetElementId.innerText = value;

  }


// set total number in inner text
  function pricePlusMinus(inputId, priceNumber, innerTextId){
    const phonePluse = getInputValue(inputId)
    const totalPhonePrice = phonePluse * priceNumber;
    setElementInTextPrice(innerTextId , totalPhonePrice)
  }

// set SUB total number in inner text
  function subtotal(phonePrice, backPrice){
    const getPhonePriceValue = getPriceElement(phonePrice);
    const getBackPriceValue = getPriceElement(backPrice);
    const pluseSub = getPhonePriceValue + getBackPriceValue;
    setElementInTextPrice('subtotal', pluseSub)
  }





function pluseBtn(id){
    const getPluseBtn = document.getElementById(id);

}