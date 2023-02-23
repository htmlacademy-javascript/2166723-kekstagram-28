function checkLengthString (string, lengthString) {
  string = string.length;
  if (string <= lengthString) {
    return true;
  } else {
    return false;
  }
}

checkLengthString('проверяемая строка', 10);
