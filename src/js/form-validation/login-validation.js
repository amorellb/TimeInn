import * as helper from '../helper.js';
import * as validationHelper from '../form-validation/validation-helper.js';

const btnSignUp = document.querySelector('.btn-register');
const overlay = document.querySelector('.overlay');
const alertMsg = document.querySelector('.alert-msg');
const checkboxInput = document.querySelector('.pp-checkbox');

const emailInput = document.querySelector('.email-input');
const passInput = document.querySelector('.pass-input');
const btnLogin = document.querySelector('.btn-login');

export const loginBtnHandler = function (usersArr) {
  if (!btnLogin || !emailInput || !passInput) return;
  btnLogin.addEventListener('click', e => {
    e.preventDefault();
    const user = validationHelper.checkUserData(
      emailInput.value,
      passInput.value,
      usersArr
    );
    sendMsg(user);
  });
};

const sendMsg = function (checkedUser) {
  if (!checkedUser) {
    alert('The email or password are wrong! Please try again.');
  } else if (checkedUser) {
    helper.setCookie(`user=${checkedUser.name}; path=/; SameSite=Lax;`);
    window.location.replace('index.html');
  }
};

/**
 * A function to send the user from the login page to the sign up page
 */
export const sendToSignUpPage = function () {
  if (!btnSignUp || !checkboxInput || !overlay || !alertMsg) return;
  btnSignUp.addEventListener('click', () => {
    if (checkboxInput.classList.contains('checked')) {
      window.location.replace('signup.html');
    } else {
      helper.toggleAlertVisibility(overlay, alertMsg);
      setTimeout(() => {
        helper.toggleAlertVisibility(overlay, alertMsg);
      }, 3000);
    }
  });
};

export const checkboxHandler = function () {
  if (!checkboxInput) return;
  checkboxInput.addEventListener('click', () => {
    checkboxInput.classList.toggle('checked');
  });
};
