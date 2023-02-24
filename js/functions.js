function checkLengthString (string, lengthString) {
  string = string.length;
  if (string <= lengthString) {
    return true;
  } else {
    return false;
  }
}

checkLengthString();

function checkPalindrome (string) {
  const lowerString = string.toLowerCase().replaceAll(' ', '');
  let reverseString = '';
  for (let i = lowerString.length - 1; i >= 0; i--) {
    reverseString += lowerString.at(i);
  }
  return lowerString === reverseString;
}

checkPalindrome();

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

searchNumber();

function myPadStart (string, minLength, pad) {
  const actualPad = minLength - string.length;

  if (actualPad <= 0) {
    return string;
  }

  return pad.slice(0, actualPad % pad.length) + pad.repeat(actualPad / pad.length) + string;
}

myPadStart();
