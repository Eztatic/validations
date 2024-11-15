const toggleValMsg = (show, input, message) => {
  if (show) {
    message.classList.add("showValidation");
    input.style.outline = "1px solid #FF0000";
  } else {
    message.classList.remove("showValidation");
    input.style.outline = "none";
  }
};

const emailValidation = (type) => {
  const email = document.querySelector("#email");
  const validation = email.nextElementSibling;

  function validateEmail() {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (email.value === "") {
      validation.innerText = "An email is required";
      toggleValMsg(true, email, validation);
    } else if (!emailPattern.test(email.value)) {
      validation.innerText = "Email is not valid";
      toggleValMsg(true, email, validation);
    } else {
      validation.innerText = "";
      toggleValMsg(false, email, validation);
    }
  }

  if (type === "input") {
    email.removeEventListener("input", validateEmail);
    email.addEventListener("input", validateEmail);
  } else if ("click") {
    validateEmail();
  }
};

const countryValidation = (type) => {
  const country = document.querySelector("#country");
  const validation = country.nextElementSibling;

  function validateCountry() {
    if (country.value === "") {
      validation.innerText = "Must select a country";
      toggleValMsg(true, country, validation);
    } else {
      validation.innerText = "";
      toggleValMsg(false, country, validation);
    }
  }

  if (type === "input") {
    country.removeEventListener("input", validateCountry);
    country.addEventListener("input", validateCountry);
  } else if ("click") {
    validateCountry();
  }
};

const zipCodeValidation = (type) => {
  const zipCode = document.querySelector("#zip-code");
  const validation = zipCode.nextElementSibling;

  function validateZipCode() {
    const zipCodePattern =
      /^(\d{5}(-\d{4})?|[A-Za-z]\d[A-Za-z][ ]?\d[A-Za-z]\d|[A-Za-z]{1,2}\d[A-Za-z\d]?[ ]?\d[A-Za-z]{2})$/;
    if (zipCode.value === "") {
      validation.innerText = "A zip code is required";
      toggleValMsg(true, zipCode, validation);
    } else if (!zipCodePattern.test(zipCode.value)) {
      validation.innerText = "Zip code is not valid";
      toggleValMsg(true, zipCode, validation);
    } else {
      validation.innerText = "";
      toggleValMsg(false, zipCode, validation);
    }
  }

  if (type === "input") {
    zipCode.removeEventListener("input", validateZipCode);
    zipCode.addEventListener("input", validateZipCode);
  } else if ("click") {
    validateZipCode();
  }
};

const passwordValidation = (type) => {
  const password = document.querySelector("#password");
  const confirmPassword = document.querySelector("#confirm-password");
  const showPwd = document.querySelector(".seeIcon");
  const validation = password.parentElement.nextElementSibling;
  const validation1 = confirmPassword.nextElementSibling;

  function togglePwd() {
    const type = password.type === "password" ? "text" : "password";
    password.type = type;

    showPwd.classList.toggle("darken");
  }

  function validatePassword() {
    validation1.innerText = "";
    toggleValMsg(false, confirmPassword, validation1);
    if (password.value === "") {
      validation.innerText = "A password is required";
      toggleValMsg(true, password, validation);
    } else if (password.value.length < 12) {
      validation.innerText = "Password must be at least 12 characters long";
      toggleValMsg(true, password, validation);
    } else if (!/[A-Z]/.test(password.value)) {
      validation.innerText = "Password must contain an uppercase character";
      toggleValMsg(true, password, validation);
    } else if (!/\d/.test(password.value)) {
      validation.innerText = "Password must contain a digit number";
      toggleValMsg(true, password, validation);
    } else if (!/[\W_]/.test(password.value)) {
      validation.innerText =
        "Password must contain a special character e.g. !@#$%";
      toggleValMsg(true, password, validation);
    } else {
      validation.innerText = "";
      toggleValMsg(false, password, validation);
    }
  }

  function validateConfirmPwd() {
    if (password.value === "") {
      validation1.innerText = "Password is empty";
      toggleValMsg(true, confirmPassword, validation1);
    } else if (password.value !== confirmPassword.value) {
      validation1.innerText = "Password does not match";
      toggleValMsg(true, confirmPassword, validation1);
    } else {
      validation1.innerText = "";
      toggleValMsg(false, confirmPassword, validation1);
    }
  }

  if (type === "input") {
    showPwd.removeEventListener("click", togglePwd);
    showPwd.addEventListener("click", togglePwd);
    password.removeEventListener("input", validatePassword);
    password.addEventListener("input", validatePassword);
    confirmPassword.removeEventListener("input", validateConfirmPwd);
    confirmPassword.addEventListener("input", validateConfirmPwd);
  } else if ("click") {
    validatePassword();
    validateConfirmPwd();
  }
};

// Validations
emailValidation("input");
countryValidation("input");
zipCodeValidation("input");
passwordValidation("input");

const submitBtn = document.querySelector("#create-acc");
submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  emailValidation("click");
  countryValidation("click");
  zipCodeValidation("click");
  passwordValidation("click");
});
