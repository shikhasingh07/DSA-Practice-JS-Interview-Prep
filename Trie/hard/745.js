class TrieNode {
  constructor() {
    this.children = {};
    this.index = -1;
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode();
  }

  insert(word, index) {
    let node = this.root;

    for (let char of word) {
      if (!node.children[char]) node.children[char] = new TrieNode();
      node = node.children[char];
      node.index = index;
    }
  }
}

var WordFilter = function (words) {
  this.trie = new Trie();
  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    for (let j = 0; j <= word.length; j++) {
      this.trie.insert(word.slice(j) + "#" + word, i);
    }
  }
};

WordFilter.prototype.f = function (pref, suff) {
  let node = this.trie.root;
  let key = suff + "#" + pref;

  for (let char of key) {
    if (!node.children[char]) return -1;
    node = node.children[char];
  }

  return node.index;
};

let wf = new WordFilter(["apple"]);
console.log(wf.f("a", "e")); // expected 0
console.log(wf.f("b", "e")); // expected -1
