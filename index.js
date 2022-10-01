// Reseting the Fields
function resetFields() {
  document.getElementById("reg-form-id").reset()

  document.getElementById("firstValid").style.display = "none";
  document.getElementById("lastValid").style.display = "none";
  document.getElementById("emailValid").style.display = "none";
  document.getElementById("passwordValid").style.display = "none";
  document.getElementById("confirm-password-valid").style.display = "none";
  document.getElementById("tandcChecked").style.display = "none";
}
// Validation of Form
function validate() {
  let firstName = document.getElementById("first-name").value;
  let lastName = document.getElementById("last-name").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  let confirmPassword = document.getElementById("confirm-password").value;
  let tandc = document.getElementById("tandc").checked;


  let error = false;

  // First Name Validation
  if (firstName.length >= 3) {
    document.getElementById("firstValid").style.display = "block";
    document.getElementById("firstInvalid").style.display = "none";
  } else {
    error = true;
    document.getElementById("firstInvalid").style.display = "block";
    document.getElementById("firstValid").style.display = "none";
  }

  // Last Name Validation
  if (lastName.length >= 3) {
    document.getElementById("lastValid").style.display = "block";
    document.getElementById("lastInvalid").style.display = "none";
  } else {
    error = true;
    document.getElementById("lastInvalid").style.display = "block";
    document.getElementById("lastValid").style.display = "none";
  }

  // Email Validation
  if (
    email.includes("@") &&
    email.includes(".") &&
    email.indexOf("@") > 0 &&
    email.substr(email.lastIndexOf(".") + 1).length >= 2
  ) {
    document.getElementById("emailValid").style.display = "block";
    document.getElementById("emailInvalid").style.display = "none";
  } else {
    error = true;
    document.getElementById("emailInvalid").style.display = "block";
    document.getElementById("emailValid").style.display = "none";
  }
  
  // Password Validation
  if (password.length >=8
    && (password.includes('$') || password.includes('#') || password.includes('@') )
    && (password.includes('0') || password.includes('1') || password.includes('2') || password.includes('3') || password.includes('4')  )
     ) {
    document.getElementById("passwordValid").style.display = "block";
    document.getElementById("passwordInvalid").style.display = "none";
  } else {
    error = true;
    document.getElementById("passwordInvalid").style.display = "block";
    document.getElementById("passwordValid").style.display = "none";
  }
// Confirn Password Validation
  if (password !== confirmPassword) {
    document.getElementById("confirm-password-invalid").style.display = "block";
    error = true;
  } else {
    document.getElementById("confirm-password-invalid").style.display = "none";
  }
// Terms and Condition Validation
  if (tandc) {
    document.getElementById("tandcChecked").style.display = "none";
  } else {
    error = true;
    document.getElementById("tandcChecked").style.display = "block";
  }

  // If error not occured then Submit
  if (!error) {
    alert("Your details have been saved successfully!");
    resetFields();
  }
}
