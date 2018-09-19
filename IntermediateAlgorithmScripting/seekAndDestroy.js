function destroyer(arr) {
  const args = [...arguments];
  return arr.filter(el => !args.includes(el));
}