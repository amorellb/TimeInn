/**
 * A helper function used to change the first letter of a word to uppercase
 * @param {string} word
 * @returns Returns a string with the first letter in uppercase
 */
export const firstUpperLetter = function (word) {
  const firstLetter = word.split('')[0].toUpperCase();
  return firstLetter.concat(word.slice(1, word.length));
};

/**
 * A function to sort the events by its date
 * @param {array} array
 * @returns An array of events sorted by date
 */
export const sortByDate = function (array, property) {
  return array.sort((a, b) => {
    return new Date(a.property).getTime() - new Date(b.property).getTime();
  });
};

/**
 * A function to empty the input values of the form
 * @param {element} input1
 * @param {element} input2
 * @param {element} input3
 * @param {element} input4
 */
export const emptyInputValues = function (input1, input2, input3, input4) {
  if (!input1 || !input2 || !input3 || !input4) return;
  input1.value = '';
  input2.value = '';
  input3.value = '';
  input4.value = '';
};

export const toggleAlertVisibility = function (overlay, alertMsg) {
  overlay.classList.toggle('hidden');
  alertMsg.classList.toggle('hidden');
};

// Set data into the browser's local storage
export const setLocalStorage = function (usersArr) {
  localStorage.setItem('users', JSON.stringify(usersArr));
};

// Get the data from the browser's local storage
export const getLocalStorage = function (usersArr) {
  const data = JSON.parse(localStorage.getItem('users'));
  usersArr = data ? [...data] : usersArr;
  return usersArr;
};

// Delete all the data from the browser's local storage
export const deleteLocalStorage = function () {
  localStorage.removeItem('users');
};

// Get all the cookies in an array
export const getCookies = function () {
  return document.cookie.split(';').map(cookieName => cookieName.trim());
};

// Set new cookies
export const setCookie = function (cookieParams) {
  document.cookie = cookieParams;
};

// Delete user cookie
export const delCookie = function (userCookieName) {
  setCookie(`${userCookieName}; max-age=-1; path=/; SameSite=Lax;`);
};

// Filter user cookie
export const filterUserCookie = function () {
  try {
    const cookies = getCookies();
    const [userCookie] = cookies?.filter(cookie => cookie.startsWith('user'));
    return userCookie;
  } catch (err) {
    console.error(err);
  }
};
