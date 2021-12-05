const emailInput = document.querySelector('.email-input');
const passInput = document.querySelector('.pass-input');
const btnLogin = document.querySelector('.btn-login');

export const loginBtnHandler = function (usersArr) {
  if (!btnLogin || !emailInput || !passInput) return;
  btnLogin.addEventListener('click', e => {
    e.preventDefault();
    sendMsg(
      checkEmail(emailInput.value),
      checkPassword(passInput.value),
      usersArr
    );
  });
};

const checkEmail = function (emailValue) {
  const userEmail = users.filter(user => user.email === emailValue);
  return userEmail;
};

const checkPassword = function (passValue) {
  const userPass = users.filter(user => user.password === passValue);
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
