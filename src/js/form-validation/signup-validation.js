import * as helper from '../helper.js';
import * as validationHelper from './validation-helper.js';

const inputContainerName = document.querySelector('.name-cont');
const inputContainerEmail = document.querySelector('.email-cont');
const inputContainerPassw = document.querySelector('.passw-cont');
const inputContainerPasswMatch = document.querySelector('.rpt-passw-cont');

const passInputCont = document.querySelectorAll('.input-container');

const usernameInput = document.querySelector('.signup-user');
const nameInput = document.querySelector('.signup-name');
const lastnameInput = document.querySelector('.signup-lastname');
const emailInput = document.querySelector('.signup-email');
const passInput = document.querySelector('.signup-pass');
const passRptInput = document.querySelector('.signup-pass-rpt');

const signupBtn = document.querySelector('.btn-signup');
const eyeBtn = document.querySelector('.fa-eye');
const eyeBtnRpt = document.querySelector('.repeat');

const overlay = document.querySelector('.overlay');
const alertMsg = document.querySelector('.alert-msg');

const userData = {
  user: '',
  name: '',
  lastName: '',
  email: '',
  password: '',
};

const sendNameMessage = function (userNameInput) {
  const alertContainer = document.querySelector('.alert-container');
  try {
    const isValidName = validationHelper.isNameLengthValid(userNameInput.value);
    if (!isValidName) {
      userNameInput.classList.add('wrong-input');
      let msg = 'Not a valid name length!';
      render(inputContainerName, alertContainer, generateAlert(msg));
    } else {
      userNameInput.classList.remove('wrong-input');
      if (alertContainer) {
        alertContainer.outerHTML = '';
      }
      userData.name = userNameInput.value;
    }
  } catch (err) {
    console.error(err);
  }
};

export const nameFocusHandler = function () {
  try {
    if (!nameInput) return;
    nameInput.addEventListener('focusout', e => {
      e.stopPropagation();
      sendNameMessage(nameInput);
    });
  } catch (err) {
    console.error(err);
  }
};

const sendEmailMessage = function (usersData, userEmailInput) {
  const alertContainer = document.querySelector('.alert-container');
  try {
    // let msg = 'All right!';
    const isIntoData = validationHelper.isEmailIntoData(
      usersData,
      userEmailInput.value
    );
    const isValidEmail = validationHelper.isEmailWellFormatted(
      userEmailInput.value
    );
    if (isIntoData) {
      userEmailInput.classList.add('wrong-input');
      let msg = 'The email is already registered';
      render(inputContainerEmail, alertContainer, generateAlert(msg));
    } else if (!isValidEmail) {
      userEmailInput.classList.add('wrong-input');
      let msg = 'Not a valid email format';
      render(inputContainerEmail, alertContainer, generateAlert(msg));
    } else {
      userEmailInput.classList.remove('wrong-input');
      if (alertContainer) {
        alertContainer.outerHTML = '';
      }
      userData.email = userEmailInput.value;
    }
    // return msg;
  } catch (err) {
    console.error(err);
  }
};

export const emailFocusHandler = function (usersData) {
  try {
    if (!emailInput) return;
    emailInput.addEventListener('focusout', e => {
      e.stopPropagation();
      sendEmailMessage(usersData, emailInput);
    });
  } catch (err) {
    console.error(err);
  }
};

//Password Validation
const sendPasswMessage = function (userPassInput) {
  if (!passInputCont) return;
  try {
    const alertContainer = document.querySelector('.alert-container');
    const isValidPassw = validationHelper.isPasswWellFormatted(
      userPassInput.value
    );
    if (!isValidPassw) {
      passInputCont[0].classList.add('wrong-input');
      let msg =
        'The password must contain at least 8 characters, 1 number, an uppercase, a lowercase and a special character (@ $!% *? &)';
      render(inputContainerPassw, alertContainer, generateAlert(msg));
    } else {
      passInputCont[0].classList.remove('wrong-input');
      if (alertContainer) {
        alertContainer.outerHTML = '';
      }
    }
  } catch (err) {
    console.error(err);
  }
};

export const passwFocusHandler = function () {
  try {
    if (!passInput) return;
    passInput.addEventListener('focusout', e => {
      e.stopPropagation();
      sendPasswMessage(passInput);
    });
  } catch (err) {
    console.error(err);
  }
};

//Functions to validate if passws match
const sendPasswMatchMessage = function (userPassInput, userPassRptInput) {
  if (!passInputCont) return;
  const alertContainer = document.querySelector('.alert-container');
  if (!inputContainerPasswMatch) return;
  const passwMatch = validationHelper.verifyPasswordsMatch(
    userPassInput.value,
    userPassRptInput.value
  );

  if (!passwMatch) {
    passInputCont[1].classList.add('wrong-input');
    let msg = "Passwords don't match";
    render(inputContainerPasswMatch, alertContainer, generateAlert(msg));
  } else {
    passInputCont[1].classList.remove('wrong-input');
    if (alertContainer) {
      alertContainer.outerHTML = '';
    }
  }
};

export const passwMatchFocusHandler = function () {
  try {
    if (!passInput || !passRptInput) return;
    passRptInput.addEventListener('focusout', e => {
      e.stopPropagation();
      sendPasswMatchMessage(passInput, passRptInput);
    });
  } catch (err) {
    console.error(err);
  }
};

//show error mssg
const generateAlert = function (msg) {
  return `
    <div class="alert-container">
      <p class="alert">${msg}</p>
    </div>
    `;
};
const render = function (inputCont, alertCont, markup) {
  if (alertCont) alertCont.outerHTML = '';
  inputCont.insertAdjacentHTML('beforeend', markup);
};

export const showPassw = function () {
  if (!eyeBtn || !eyeBtnRpt) return;
  eyeBtn.addEventListener('mousedown', e => {
    e.stopPropagation();
    passInput.type = 'text';
  });
  eyeBtn.addEventListener('mouseup', e => {
    e.stopPropagation();
    passInput.type = 'password';
  });

  eyeBtnRpt.addEventListener('mousedown', e => {
    e.stopPropagation();
    passRptInput.type = 'text';
  });
  eyeBtnRpt.addEventListener('mouseup', e => {
    e.stopPropagation();
    passRptInput.type = 'password';
  });
};

// Get validated data and add it to the data array
const getUserData = function () {
  if (!usernameInput || !lastnameInput || !passInput) return;
  userData.user = usernameInput.value;
  userData.lastName = lastnameInput.value;
  userData.password = passInput.value;
  return userData;
};

export const signupBtnHandler = function (usersData) {
  if (
    !signupBtn ||
    !usernameInput ||
    !nameInput ||
    !lastnameInput ||
    !emailInput ||
    !passInput ||
    !passRptInput ||
    !overlay ||
    !alertMsg
  )
    return;
  signupBtn.addEventListener('click', e => {
    e.preventDefault();
    e.stopPropagation();
    const data = getUserData();
    if (data.email) {
      usersData.push(data);
      helper.setLocalStorage(usersData);
      helper.toggleAlertVisibility(overlay, alertMsg);
      setTimeout(() => {
        helper.toggleAlertVisibility(overlay, alertMsg);
        setTimeout(() => {
          window.location.replace('login.html');
        }, 1000);
      }, 3000);
      usernameInput.value = '';
      nameInput.value = '';
      lastnameInput.value = '';
      emailInput.value = '';
      passInput.value = '';
      passRptInput.value = '';
    }
  });
};
