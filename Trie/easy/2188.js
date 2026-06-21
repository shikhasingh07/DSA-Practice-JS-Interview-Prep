class TrieNode {
  constructor() {
    this.children = {};
    this.isEnd = false;
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode();
  }

  insert(word) {
    let node = this.root;
    for (let char of word) {
      if (!node.children[char]) {
        node.children[char] = new TrieNode();
      }

      node = node.children[char];
    }
    node.isEnd = true;
  }

  startsWith(pre) {
    let node = this.root;
    for (let char of pre) {
      if (!node.children[char]) {
        return false;
      }
      node = node.children[char];
    }
    return true;
  }
}
var prefixCount = function (words, pref) {
  let node = new Trie();
  let count = 0;
  for (let i = 0; i < words.length; i++) {
    node.insert(words[i]);
    count += words[i].startsWith(pref);
  }
  return count;
};
let words = ["pay", "attention", "practice", "attend"],
  pref = "at";
console.log(prefixCount(words, pref));
