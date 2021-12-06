const usernameInput = document.querySelector('.signup-user');
const nameInput = document.querySelector('.signup-name');
const lastnameInput = document.querySelector('.signup-lastname');
const emailInput = document.querySelector('.signup-email');
const passInput = document.querySelector('.signup-pass');
const passRptInput = document.querySelector('.signup-pass-rpt');
const signupBtn = document.querySelector('.btn-signup');

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

const isValidEmailUsernameFormat = function (userEmailInput) {
  try {
    let flag = false;
    const userEmail = userEmailInput.value;
    const emailUsername = userEmail.split('@')[0];
    if (emailUsername === /[A-Z][a-z]{1}[a-z]/) {
      flag = true;
    }
    return flag;
  } catch (err) {
    console.error(err);
  }
};

const areValidEmailArrobaDotSymbols = function (userEmailInput) {
  try {
    let flag = false;
    const userEmail = userEmailInput.value;
    const arrobas = userEmail
      .split('')
      .filter(letter => letter === '@' || letter === '.')
      .join('');
    if (arrobas === '@.') flag = true;
    return flag;
  } catch (err) {
    console.error(err);
  }
};

const isValidEmailServerFormat = function (userEmailInput) {
  try {
    let flag = false;
    const userEmail = userEmailInput.value;
    const serverName = userEmail.split('@')[1].split('.')[0];
    if (
      serverName.length >= 5 &&
      serverName.length <= 10 &&
      serverName === /[a-z]/
    )
      flag = true;
    return flag;
  } catch (err) {
    console.error(err);
  }
};

const isValidEmailDomain = function (userEmailInput) {
  try {
    let flag = false;
    const userEmail = userEmailInput.value;
    const domain = userEmail.split('.')[1];
    if (domain === 'com' || domain === 'net' || domain === 'gov') flag = true;
    return flag;
  } catch (err) {
    console.error(err);
  }
};

const checkEmail = function (userEmailInput) {
  try {
    let flag = false;
    switch (flag) {
      case isValidEmailUsernameFormat(userEmailInput):
        break;
      case areValidEmailArrobaDotSymbols(userEmailInput):
        break;
      case isValidEmailServerFormat(userEmailInput):
        break;
      case isValidEmailDomain(userEmailInput):
        break;
      default:
        flag = true;
        break;
    }
    return flag;
  } catch (err) {
    console.error(err);
  }
};

const sendMessage = function (usersData, userEmailInput) {
  try {
    // let msg = 'All right!';
    const isIntoData = isEmailIntoData(usersData, userEmailInput);
    const isValidEmail = checkEmail(userEmailInput);
    if (isIntoData) {
      // msg = 'The email is already registered';
      alert('The email is already registered');
    } else if (!isValidEmail) {
      // msg = 'Not a valid email format';
      alert('Not a valid email format');
    }
    // return msg;
  } catch (err) {
    console.error(err);
  }
};

export const signupBtnHandler = function (usersData) {
  try {
    if (!signupBtn) return;
    signupBtn.addEventListener('click', e => {
      e.preventDefault();
      sendMessage(usersData, emailInput);
    });
  } catch (err) {
    console.error(err);
  }
};

// bernatmail@email.com
// miquelmail@email.com
