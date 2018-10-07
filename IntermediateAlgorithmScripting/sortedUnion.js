function uniteUnique(arr) {
  const args = [].concat(...arguments);
  return [...new Set(args)];
}
  