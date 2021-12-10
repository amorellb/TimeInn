import { setLocalStorage } from '../helper.js';
import * as validationHelper from './validation-helper.js';

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

// FIXME: .focus() only works if the label is clicked
const sendNameMessage = function (userNameInput) {
  try {
    // let msg = 'All right!';
    const isValidName = validationHelper.isNameLengthValid(userNameInput.value);
    if (!isValidName) {
      userNameInput.focus();
      // msg = 'Not a valid name length. Too long';
      alert('Not a valid name length!');
    } else {
      userData.name = userNameInput.value;
    }
    // return msg;
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

// FIXME: .focus() only works if the label is clicked
const sendEmailMessage = function (usersData, userEmailInput) {
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
      // msg = 'The email is already registered';
      alert('The email is already registered');
      userEmailInput.focus();
    } else if (!isValidEmail) {
      // msg = 'Not a valid email format';
      alert('Not a valid email format');
      userEmailInput.focus();
    } else {
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
  try {
    const isValidPassw = validationHelper.isPasswWellFormatted(
      userPassInput.value
    );
    if (!isValidPassw) {
      userPassInput.focus();
      alert(
        'The password must contain at least 8 characters, 1 number, an uppercase, a lowercase and a special character (@ $!% *? &)'
      );
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
  const passwMatch = validationHelper.verifyPasswordsMatch(
    userPassInput.value,
    userPassRptInput.value
  );
  if (!passwMatch) {
    userPassRptInput.focus();
    alert("Passwords don't match");
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

export const showPassw = function () {
  if (!eyeBtn || !eyeBtnRpt) return;
  eyeBtn.addEventListener('click', () => {
    if (passInput.type === 'password') {
      passInput.type = 'text';
    } else {
      passInput.type = 'password';
    }
  });

  eyeBtnRpt.addEventListener('click', () => {
    if (passRptInput.type === 'password') {
      passRptInput.type = 'text';
    } else {
      passRptInput.type = 'password';
    }
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
    !passRptInput
  )
    return;
  signupBtn.addEventListener('click', e => {
    e.preventDefault();
    e.stopPropagation();
    const data = getUserData();
    if (data.email) {
      usersData.push(data);
      setLocalStorage(usersData);
      toggleAlertVisibility();
      setTimeout(() => {
        toggleAlertVisibility();
      }, 3000);
    }
    usernameInput.value = '';
    nameInput.value = '';
    lastnameInput.value = '';
    emailInput.value = '';
    passInput.value = '';
    passRptInput.value = '';
  });
};

const toggleAlertVisibility = function () {
  if (!overlay || !alertMsg) return;
  overlay.classList.toggle('hidden');
  alertMsg.classList.toggle('hidden');
};
