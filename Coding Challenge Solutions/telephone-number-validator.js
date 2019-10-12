function telephoneCheck(str) {
  var digits = /^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/;
  var resultDigits = strings.match(digits);

  if (strings.length >= 10 && resultDigits) {
    return true
  }
  return false;
}


telephoneCheck("5555555555")

