function fearNotLetter(str) {
  let charCode = str.charCodeAt(0);

  for (let i = 0; i < str.length; i++) {
    if (str.charCodeAt(i) !== charCode) {
      return String.fromCharCode(charCode);
    }

    ++charCode;
  }

  return;
}