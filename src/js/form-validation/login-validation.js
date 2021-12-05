const emailInput = document.querySelector('.email-input');
const passInput = document.querySelector('.pass-input');
const btnLogin = document.querySelector('.btn-login');

export const loginBtnHandler = function (usersArr) {
  if (!btnLogin || !emailInput || !passInput) return;
  btnLogin.addEventListener('click', e => {
    e.preventDefault();
    const validEmail = checkEmail(emailInput.value, usersArr);
    const validPass = checkPassword(passInput.value, usersArr);
    sendMsg(validEmail, validPass, usersArr);
  });
};

const checkEmail = function (emailValue, usersArr) {
  const userEmail = usersArr.filter(user => user.email === emailValue);
  return userEmail;
};

const checkPassword = function (passValue, usersArr) {
  const userPass = usersArr.filter(user => user.password === passValue);
  return userPass;
};

const sendMsg = function (checkedEmail, checkedPass, usersArr) {
  if (!checkedEmail || !checkedPass) {
    alert('The email or password are wrong! Please try again.');
  } else if (checkedEmail || checkedPass) {
    user = usersArr.filter(user => user.email === checkedEmail);
    window.location.replace('index.html');
    alert(`Hello ${user.name}`);
  }
};
