document.getElementById("btn-withdraw").addEventListener("click", function () {
  // step1: use getInputValueById() to get the withdraw Field value
  const newWithdrawAmount = getInputValueById("withdraw-field");

  /*
  step2: if the input value id is not a number show an alert and 
  step3: else continue
  */

  if (isNaN(newWithdrawAmount)) {
    alert("Invalid Input");
    return;
  } else {
    /*
    step4: use getTextElementValueById() to get previous withdraw total amount
    step5: use getTextElementValueById() to get previous balance total amount
    */

    const previousWithdrawTotal = getTextElementValueById("withdraw-total");
    const previousBalanceTotal = getTextElementValueById("balance-total");

    /*
    step6: if new withdraw amount is larger than previous balance total show an alert and do nothing
    step7: else continue
    */

    if (newWithdrawAmount > previousBalanceTotal) {
      alert("Insufficient Balance");
      return;
    } else {
      /*
        step8: sum: previous withdraw total amount + new withdraw amount
        step9: set new withdraw total amount
        step10: minus:  previous balance total amount - new withdraw amount
        step9: set new balance total amount
        */
      const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
      setTextElementValueById("withdraw-total", newWithdrawTotal.toFixed(2));
      const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
      setTextElementValueById("balance-total", newBalanceTotal.toFixed(2));
    }
  }
});
