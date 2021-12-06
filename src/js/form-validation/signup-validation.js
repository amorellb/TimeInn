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

const isEmailWellFormatted = function (userEmailInput) {
  const pattern = /^[A-Za-z]{1}[a-z]*\@[a-z]{5,10}\.(com|net|gov)$/;
  const userEmail = userEmailInput.value;
  return pattern.test(userEmail);
};

const sendMessage = function (usersData, userEmailInput) {
  try {
    // let msg = 'All right!';
    const isIntoData = isEmailIntoData(usersData, userEmailInput);
    const isValidEmail = isEmailWellFormatted(userEmailInput);
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
    signupBtn.addEventListener('focusout', e => {
      e.preventDefault();
      sendMessage(usersData, emailInput);
    });
  } catch (err) {
    console.error(err);
  }
};
