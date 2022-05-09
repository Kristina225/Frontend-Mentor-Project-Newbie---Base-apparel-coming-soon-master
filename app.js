const signupForm = document.getElementById("signup-form");
const signupInputField = document.querySelector(".content__signup--input");
const errorMessage = document.querySelector(".content__signup--error--message");
const errorIcon = document.querySelector(".content__signup--error--icon");

// Check if the user has entered a valid input
const validEmail = function (enteredEmail) {
  emailRegex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return emailRegex.test(enteredEmail);
};

// Change styles when there's invalid input
const addErrorMessage = function (errMsg) {
  errorMessage.textContent = errMsg;
  errorIcon.style.display = "block";
  signupInputField.style.border = "2px solid #F96464";
};

// Return styles to normal when the input is valid
const removeErrorMessage = function () {
  errorMessage.textContent = "";
  errorIcon.style.display = "none";
  signupInputField.style.border = "1px solid #ce9898";
};

// Even listener on submit event
signupForm.addEventListener("submit", (event) => {
  event.preventDefault();
  removeErrorMessage();

  const enteredEmail = signupInputField.value.trim();

  if (!validEmail(enteredEmail))
    addErrorMessage("Please provide a valid email");
  if (enteredEmail === "") addErrorMessage("Please enter an email address");
});
