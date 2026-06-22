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

}

var findWords = function (board, words) {
  let result = [];
  let node = new Trie();

  for (let word of words) {
    node.insert(word);
  }

  function dfs(i, j, trieNode, currentWord) {
    if (i < 0 || i >= board.length || j < 0 || j >= board[0].length) return;

    let char = board[i][j];
    if (char === "#") return;

    if (!trieNode.children[char]) return;

    let nextNode = trieNode.children[char];
    currentWord += char;

    if (nextNode.isEnd) {
      result.push(currentWord);
      nextNode.isEnd = false;
    }
    board[i][j] = "#";
    dfs(i + 1, j, nextNode, currentWord);
    dfs(i - 1, j, nextNode, currentWord);
    dfs(i, j + 1, nextNode, currentWord);
    dfs(i, j - 1, nextNode, currentWord);
    board[i][j] = char;
  }

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      dfs(i, j, node.root, "");
    }
  }

  return result;
};

let board = [
    ["o", "a", "a", "n"],
    ["e", "t", "a", "e"],
    ["i", "h", "k", "r"],
    ["i", "f", "l", "v"],
  ],
  words = ["oath", "pea", "eat", "rain"];
console.log(findWords(board, words));
