function checkLengthString (string, lengthString) {
  return string.length <= lengthString;
}

checkLengthString('проверяемая строка', 20);
checkLengthString('проверяемая строка', 18);
checkLengthString('проверяемая строка', 10);

function checkPalindrome (string) {
  const lowerString = string.toLowerCase().replaceAll(' ', '');
  let reverseString = '';
  for (let i = lowerString.length - 1; i >= 0; i--) {
    reverseString += lowerString.at(i);
  }
  return lowerString === reverseString;
}

checkPalindrome('топот');
checkPalindrome('ДовОд');
checkPalindrome('Кекс');
checkPalindrome('Лёша на полке клопа нашёл ');

function searchNumber (string) {
  if (typeof string === 'number') {
    return string;
  }

  let result = '';
  for (let i = 0; i < string.length; i++) {
    if (!Number.isNaN(parseInt(string.at(i), 10))) {
      result += string.at(i);
    }
  }
  return parseInt (result, 10);
}

searchNumber('2023 год');
searchNumber('ECMAScript 2022');
searchNumber('1 кефир, 0.5 батона');
searchNumber('агент 007');
searchNumber('а я томат');
searchNumber(2023);
searchNumber(-1);
searchNumber(1.5);

function myPadStart (string, minLength, pad) {
  const actualPad = minLength - string.length;

  if (actualPad <= 0) {
    return string;
  }

  return pad.slice(0, actualPad % pad.length) + pad.repeat(actualPad / pad.length) + string;
}

myPadStart('1', 2, '0');
myPadStart('1', 4, '0');
myPadStart('q', 4, 'werty');
myPadStart('q', 4, 'we');
myPadStart('qwerty', 4, '0');
