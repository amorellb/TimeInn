export const firstUpperLetter = function (word) {
  const firstLetter = word.split('')[0].toUpperCase();
  return firstLetter.concat(word.slice(1, word.length));
};
