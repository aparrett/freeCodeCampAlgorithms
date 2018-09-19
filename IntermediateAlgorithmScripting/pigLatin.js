function translatePigLatin(str) {
  // Index of the first vowel in the string.
  const vowelIndex = str.search(/[aeiou]/);
  
  if (vowelIndex === 0) return str.concat('way');
  if (vowelIndex === -1) return str.concat('ay');

  return str.substr(vowelIndex)
    .concat(str.substr(0, vowelIndex))
    .concat('ay');
}

// first attempt.

// function translatePigLatin(str) {
//   if (isVowel(str[0])) return str.concat('way');

//   for (let i = 0; i < str.length; i++) {
//     if (isVowel(str[i])){
//       const first = str.slice(0, i);

//       return str
//         .slice(i, str.length)
//         .concat(first)
//         .concat('ay');
//     }
//   }

//   return str.concat('ay');
// }

// function isVowel(c) {
//     return ['a', 'e', 'i', 'o', 'u'].includes(c.toLowerCase());
// }