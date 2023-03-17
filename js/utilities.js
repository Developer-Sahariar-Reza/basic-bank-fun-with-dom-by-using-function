/*
step1: get inputField id
step2: get inputField value in string
step3: value in string to number
step4: clear the input field
step5: return the value in positive number
*/

function getInputValueById(inputId) {
  const inputField = document.getElementById(inputId);
  const inputValueString = inputField.value;
  const inputValue = parseFloat(inputValueString);
  inputField.value = "";
  return Math.abs(inputValue);
}

/*
step1: get textElement id
step2: get textElement value in string
step3: string value convert to number
step 4 : return the value
*/

function getTextElementValueById(elementId) {
  const textElement = document.getElementById(elementId);
  const textElementValueString = textElement.innerText;
  const textElementValue = parseFloat(textElementValueString);
  return textElementValue;
}

/*
step1: take 2 parameter - text element id and new value
step2: get element id
step3: set the new value
*/

function setTextElementValueById(elementId, newValue) {
  const textElement = document.getElementById(elementId);
  textElement.innerText = newValue;
}
