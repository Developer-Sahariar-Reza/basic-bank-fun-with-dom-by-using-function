document.getElementById("btn-deposit").addEventListener("click", function () {
  // step1: use getInputValueById() to get the deposit Field value
  const newDepositAmount = getInputValueById("deposit-field");

  /*
  step2: if the input value id is not a number show an alert and 
  step3: else continue
  */
  if (isNaN(newDepositAmount)) {
    alert("Invalid input");
    return;
  } else {
    /*
    step4: use getTextElementValueById() to get previous deposit total value
    step5: make sum of previous deposit total and new deposit amount
    step6: use setTextElementValueById() to set new deposit total and if float number used make it fixed in 2 
    */
    const previousDepositTotal = getTextElementValueById("deposit-total");
    const newDepositTotal = previousDepositTotal + newDepositAmount;
    setTextElementValueById("deposit-total", newDepositTotal.toFixed(2));

    /*
    step4: use getTextElementValueById() to get previous balance-total value
    step5: make sum of previous balance total and new deposit amount
    step6: use setTextElementValueById() to set new balance total and if float number used make it fixed in 2 
    */

    const previousBalanceTotal = getTextElementValueById("balance-total");
    const newBalanceTotal = previousBalanceTotal + newDepositAmount;
    setTextElementValueById("balance-total", newBalanceTotal.toFixed(2));
  }
});
