const nameIn = document.querySelector("#name");
const email = document.querySelector("#email");
const phone = document.querySelector("#phone");
const nameErr = document.querySelector(".nameErr");
const emailErr = document.querySelector(".emailErr");
const phoneErr = document.querySelector(".phoneErr");
const submit = document.querySelector(".submit");

submit.disabled = true;

let errors = {};

const validateEmail = (email) => {
  const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
};
const validatePhone = (phone) => {
  const re = /(([(]?[0-9]{1,3}[)]?)|([(]?[0-9]{4}[)]?))\s*[)]?[-\s\.]?[(]?[0-9]{1,3}[)]?([-\s\.]?[0-9]{3})([-\s\.]?[0-9]{3,4})/g;
  return re.test(phone);
};

const validate = () => {
  if (nameIn.value.trim()) {
    if (nameIn.value.trim().length >= 2) {
      errors.name && delete errors.name;
    } else {
      errors.name = "* Name length must be at least 2 characters";
    }
  } else {
    errors.name = "* Name can not be empty";
  }
  if (email.value.trim()) {
    if (validateEmail(email.value.trim())) {
      errors.email && delete errors.email;
    } else {
      errors.email = "* Please enter a valid email address";
    }
  } else {
    errors.email = "* Email can not be empty";
  }
  if (phone.value.trim()) {
    if (validatePhone(phone.value.trim())) {
      errors.phone && delete errors.phone;
    } else {
      errors.phone = "* Please enter a valid phone number";
    }
  } else {
    errors.phone = "* Phone can not be empty";
  }
  nameErr.innerHTML = errors.name || "";
  emailErr.innerHTML = errors.email || "";
  phoneErr.innerHTML = errors.phone || "";
  if (errors.name || errors.email || errors.phone) {
    submit.disabled = true;
  } else {
    submit.disabled = false;
  }
};

nameIn.addEventListener("keyup", () => validate());
email.addEventListener("keyup", () => validate());
phone.addEventListener("keyup", () => validate());

submit.addEventListener("click", (e) => {
  e.preventDefault();
  window.location.replace(`${window.location.href.replace("index", "thanks")}`);
});
