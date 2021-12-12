// Name validation with regex
export const isNameLengthValid = function (userName) {
  try {
    const pattern = /^\w{1,10}$/;
    return pattern.test(userName);
  } catch (err) {
    console.error(err);
  }
};

// Check if email is in local storage
export const isEmailIntoData = function (usersData, userEmail) {
  if (!usersData) return;
  try {
    let flag = false;
    const [user] = usersData.filter(user => user.email === userEmail);
    if (user) flag = true;
    if (userEmail === '') flag = false;
    return flag;
  } catch (err) {
    console.error(err);
  }
};

// Email validation with regex
export const isEmailWellFormatted = function (userEmail) {
  const pattern = /^[A-Za-z]{1}[a-z]*\@[a-z]{5,10}\.(com|net|gov)$/;
  return pattern.test(userEmail);
};

// Get user with passed email and password
export const checkUserData = function (emailValue, passValue, usersArr) {
  if (!usersArr) return;
  const [user] = usersArr.filter(
    user => user.email === emailValue && user.password === passValue
  );
  return user;
};

// Password validation and match validation
export const isPasswWellFormatted = function (userPassw) {
  //1 minuscula, 1 mayuscula,1 numero,caracter especial de los puestos, minimo 8, no pongo maximo
  const pattern =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  return pattern.test(userPassw);
};

// Check if both password inputs have the same password
export const verifyPasswordsMatch = function (userPass, userPassRpt) {
  let flag = false;
  if (userPass === userPassRpt) flag = true;
  return flag;
};
