const usernameInput = document.querySelector('.signup-user');
const nameInput = document.querySelector('.signup-name');
const lastnameInput = document.querySelector('.signup-lastname');
const emailInput = document.querySelector('.signup-email');
const passInput = document.querySelector('.signup-pass');
const passRptInput = document.querySelector('.signup-pass-rpt');
const signupBtn = document.querySelector('.btn-signup');

// Name validation
const isNameLengthValid = function (userNameInput) {
  try {
    const pattern = /^\w{1,10}$/;
    const name = userNameInput.value;
    return pattern.test(name);
  } catch (err) {
    console.error(err);
  }
};

const sendNameMessage = function (userNameInput) {
  try {
    // let msg = 'All right!';
    const isValidName = isNameLengthValid(userNameInput);
    if (!isValidName) {
      userNameInput.focus();
      // msg = 'Not a valid name length. Too long';
      alert('Not a valid name length!');
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
      sendNameMessage(nameInput);
    });
  } catch (err) {
    console.error(err);
  }
};

// Email validation
const isEmailIntoData = function (usersData, userEmailInput) {
  try {
    let flag = false;
    const userEmail = userEmailInput.value;
    const [user] = usersData.filter(user => user.email === userEmail);
    if (user) flag = true;
    return flag;
  } catch (err) {
    console.error(err);
  }
};

const isEmailWellFormatted = function (userEmailInput) {
  const pattern = /^[A-Za-z]{1}[a-z]*\@[a-z]{5,10}\.(com|net|gov)$/;
  const userEmail = userEmailInput.value;
  return pattern.test(userEmail);
};

const sendEmailMessage = function (usersData, userEmailInput) {
  try {
    // let msg = 'All right!';
    const isIntoData = isEmailIntoData(usersData, userEmailInput);
    const isValidEmail = isEmailWellFormatted(userEmailInput);
    if (isIntoData) {
      userEmailInput.focus();
      // msg = 'The email is already registered';
      alert('The email is already registered');
    } else if (!isValidEmail) {
      userEmailInput.focus();
      // msg = 'Not a valid email format';
      alert('Not a valid email format');
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
      sendEmailMessage(usersData, emailInput);
    });
  } catch (err) {
    console.error(err);
  }
};
