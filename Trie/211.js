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

  addWord(word) {
    let node = this.root;

    for (let char of word) {
      if (!node.children[char]) {
        node.children[char] = new TrieNode();
      }
      node = node.children[char];
    }

    node.isEnd = true;
  }

  dfs(node,i,word) {
    if (i === word.length) return node.isEnd;

    let char = word[i];
    if (char === ".") {
      for (let child of Object.values(node.children)) {
        if (this.dfs(child, i + 1, word)) return true;
      }
      return false;
    }
    if (!node.children[char]) return false;
    return this.dfs(node.children[char], i + 1, word);
  }

  search(word) {
    return this.dfs(this.root, 0, word);
  }
}

const trie = new Trie();
trie.addWord("bad");
trie.addWord("dad");
trie.addWord("mad");
console.log(trie.search("pad")); // false
console.log(trie.search("bad")); // true
console.log(trie.search(".ad")); // true
console.log(trie.search("b..")); // true
