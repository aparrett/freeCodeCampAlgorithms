function diffArray(arr1, arr2) {
  return arr1
    .concat(arr2)
    .filter(n => !arr1.includes(n) || !arr2.includes(n));
}


// first attempt

// function diffArray(arr1, arr2) {
//   const result = [];
//   const maxLength = Math.max(arr1.length, arr2.length);

//   for (let i = 0; i < maxLength; i++) {
//     if (arr1[i] && !arr2.includes(arr1[i])) {
//       result.push(arr1[i]);
//     }

//     if (arr2[i] && !arr1.includes(arr2[i])) {
//       result.push(arr2[i]);
//     }
//   }

//   return result;
// }