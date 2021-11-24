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
