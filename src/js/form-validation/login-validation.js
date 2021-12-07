const emailInput = document.querySelector('.email-input');
const passInput = document.querySelector('.pass-input');
const btnLogin = document.querySelector('.btn-login');

export const loginBtnHandler = function (usersArr) {
  if (!btnLogin || !emailInput || !passInput) return;
  btnLogin.addEventListener('click', e => {
    e.preventDefault();
    const user = checkUserData(emailInput.value, passInput.value, usersArr);
    sendMsg(user);
  });
};

const checkUserData = function (emailValue, passValue, usersArr) {
  const [user] = usersArr.filter(
    user => user.email === emailValue && user.password === passValue
  );
  return user;
};

const sendMsg = function (checkedUser) {
  if (!checkedUser) {
    alert('The email or password are wrong! Please try again.');
  } else if (checkedUser) {
    document.cookie = `user=${checkedUser.name}; path=/; SameSite=Lax;`;
    window.location.replace('index.html');
  }
};
