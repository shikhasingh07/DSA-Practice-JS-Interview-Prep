class TrieNode {
  constructor() {
    this.children = {};
    this.count = 0;
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode();
  }

  insert(word) {
    let node = this.root;
    for (let k = 0; k < word.length; k++) {
      let pair = `${word[k]},${word[word.length - 1 - k]}`;
      if (!node.children[pair]) {
        node.children[pair] = new TrieNode();
      }
      node = node.children[pair];
    }
    node.count++;
  }

  search(word) {
    let node = this.root;
    let count = 0;
    for (let k = 0; k < word.length; k++) {
      let pair = `${word[k]},${word[word.length - 1 - k]}`;
      if (!node.children[pair]) {
        break;
      }
      node = node.children[pair];
      if (node.count) {
        count += node.count
      }
    }
    return count;
  }
}

var countPrefixSuffixPairs = function (words) {
  let result = 0;
  let child = new Trie();
  for (let i = 0; i < words.length; i++) {
    result += child.search(words[i]);
    child.insert(words[i]);
  }

  return result;
};

let words = ["b","b","bb"];
console.log(countPrefixSuffixPairs(words));

//  BF
//   let res = 0;
//   for (let i = 0; i < words.length; i++) {
//     for (let j = i + 1; j < words.length; j++) {
//         res += words[j].startsWith(words[i]) && words[j].endsWith(words[i]);
//     }
//   }
//  return res;
