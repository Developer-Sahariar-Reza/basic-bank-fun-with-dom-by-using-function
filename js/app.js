document.getElementById("btn-submit").addEventListener("click", function () {
  /*
    step1: get email field
    step2: get email field value
    */
  const userEmailField = document.getElementById("user-email");
  const userEmail = userEmailField.value;

  /*
  step3: get password field
  step4: get password value
  */

  const userPasswordField = document.getElementById("user-password");
  const userPassword = userPasswordField.value;

  /*
  step5: if email and password match take user to bank dashboard
  step6: if email and password are not matching give an alert and clear the email field and password field

  Notice: Please don't use this code in professional life. This code is for basic dom project.
  */

  if (userEmail === "dom2@bank.com" && userPassword === "dom") {
    window.location.href = "bank.html";
  } else {
    alert("Invalid email or password");
    userEmailField.value = "";
    userPasswordField.value = "";
  }
});
