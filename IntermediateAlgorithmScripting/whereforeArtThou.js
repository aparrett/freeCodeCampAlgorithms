function whatIsInAName(collection, source) {
  const keys = Object.keys(source);
  return collection
    .filter(item => keys.every(key => item[key] === source[key]));
}