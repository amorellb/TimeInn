import { setLocalStorage } from '../helper.js';

const usernameInput = document.querySelector('.signup-user');
const nameInput = document.querySelector('.signup-name');
const lastnameInput = document.querySelector('.signup-lastname');
const emailInput = document.querySelector('.signup-email');
const passInput = document.querySelector('.signup-pass');
const passRptInput = document.querySelector('.signup-pass-rpt');
const signupBtn = document.querySelector('.btn-signup');
const eyeBtn = document.querySelector('.fa-eye');
const eyeBtnRpt = document.querySelector('.repeat');

const userData = {
  user: '',
  name: '',
  lastName: '',
  email: '',
  password: '',
};

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

// FIXME: focus not working
const sendNameMessage = function (userNameInput) {
  try {
    // let msg = 'All right!';
    const isValidName = isNameLengthValid(userNameInput);
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
    if (userEmail === '') flag = false;
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

// FIXME: focus not working
const sendEmailMessage = function (usersData, userEmailInput) {
  try {
    // let msg = 'All right!';
    const isIntoData = isEmailIntoData(usersData, userEmailInput);
    const isValidEmail = isEmailWellFormatted(userEmailInput);
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
    emailInput.addEventListener('focusout', () => {
      sendEmailMessage(usersData, emailInput);
    });
  } catch (err) {
    console.error(err);
  }
};

//Password Validation
/* 
const isPasswWellFormatted = function (userPasswInput) {
  const pattern =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  const userPassw = passInput.value;
  return pattern.test(userPassw);
};
const isPasswIntoData = function (usersData, userPasswInput) {
  try {
    let flag = false;
    const userPassw = userPasswInput.value;
    const [user] = usersData.filter(user => user.password === userPassw);
    if (user) flag = true;
    return flag;
  } catch (err) {
    console.error(err);
  }
};
const sendPasswMessage = function (userPasswData) {
  try {
    //1 minuscula, 1 mayuscula,1 numero,caracter especial de los puestos, minimo 8, no pongo maximo
    const pattern =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (passInput.length < 8) {
      alert('Your password must be at least 8 characters');
    }
    if (passInput.search(/[0-9]/) <= 0) {
      alert('Your password must contain at least one digit');
    }
  } catch (err) {
    console.error(err);
  }
};

export const passwFocusHandler = function (usersData) {
  try {
    if (!passInput) return;
    passInput.addEventListener('focusout', () => {
      sendPasswMessage(usersData, userPasswData);
    });
  } catch (err) {
    console.error(err);
  }
};
 */
//FUNCION INTENTADO HACER LOS DOS A AL AVEZ CON UN QUERYSELECTORALL
/* export const showPassw = function () {
  eyeBtn.forEach(boton => {
    boton.addEventListener('click', () => {
      if ((passInput.type && passRptInput.type) === 'password') {
        passInput.type = 'text';
        passRptInput.type = 'text';
      } else {
        passInput.type = 'password';
        passRptInput.type = 'password';
      }
    });
  });
}; */
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

const getUserData = function () {
  if (!usernameInput || !lastnameInput) return;
  userData.user = usernameInput.value;
  userData.lastName = lastnameInput.value;
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
    const data = getUserData();
    if (data) {
      usersData.push(data);
      setLocalStorage(usersData);
    }
    usernameInput.value = '';
    nameInput.value = '';
    lastnameInput.value = '';
    emailInput.value = '';
    passInput.value = '';
    passRptInput.value = '';
  });
};
