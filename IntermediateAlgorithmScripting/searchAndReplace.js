function myReplace(str, before, after) {
  return str
    .split(' ')
    .map(word => {
      if (word !== before) return word;

      return /[A-Z]/.test(word[0]) === true
        ? after[0].toUpperCase() + after.slice(1, after.length) 
        : after;
    })
    .join(' ');
}