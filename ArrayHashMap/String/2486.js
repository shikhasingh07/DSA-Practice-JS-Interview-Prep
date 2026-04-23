var appendCharacters = function(s, t) {
    let i = 0; // pointer for s
    let j = 0; // pointer for t
  
    while (i < s.length && j < t.length) {
      if (s[i] === t[j]) {
        j++; // move j only if there's a match
      }
      i++; // always move i
    }
  
    // Characters in t not matched are the ones we need to append
    return t.length - j;
};

