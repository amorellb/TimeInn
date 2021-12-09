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
