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

  dfs(node, currentWord, results) {
    if (results.length === 3) {
      return results;
    }

    if (node.isEnd) {
      results.push(currentWord);
    }

    for (let [char, child] of Object.entries(node.children)) {
      this.dfs(child, currentWord + char, results);
    }
  }
}

var suggestedProducts = function (products, searchWord) {
  let list = products.sort((a, b) => a.localeCompare(b));
  let node = new Trie();
  for (let i = 0; i < list.length; i++) {
    node.insert(list[i]);
  }

  let result = [];
  let prefixNode = node.root;
  let prefix = "";
  for (let char of searchWord) {
    // har character ke liye
    if (!prefixNode || !prefixNode.children[char]) {
      prefixNode = null;
      result.push([]);
      continue;
    }

    prefixNode = prefixNode.children[char];
    prefix += char;
    let suggestions = [];
    node.dfs(prefixNode, prefix, suggestions);
    result.push(suggestions);
  }
  return result;
};

let products = ["havana"],
  searchWord = "tatiana";
console.log(suggestedProducts(products, searchWord));
