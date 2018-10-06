function pairElement(str) {
  const pairs = {
    A: ['A', 'T'],
    T: ['T', 'A'],
    C: ['C', 'G'],
    G: ['G', 'C'] 
  };

  return str.split('').map(char => pairs[char]);
}