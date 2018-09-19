function spinalCase(str) {
  // Add a space between lower case and uppercase letters.
  str = str.replace(/([a-z])([A-Z])/g, '$1 $2');

  // Replace spaces and underscores with a dash.
  return str.replace(/\s+|_+/g, '-').toLowerCase();
}