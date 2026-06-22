/**
 * @param {string[]} dictionary
 * @param {string} sentence
 * @return {string}
 */
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
            if(!node.children[char]) node.children[char] = new TrieNode();
            node = node.children[char];
        }
        node.isEnd = true;
    }
}


var replaceWords = function(dictionary, sentence) {
     let trie = new Trie();
    for (let word of dictionary) {
        trie.insert(word);
    }

    let words = sentence.split(" ");
    for (let i = 0; i < words.length; i++) {
        let node = trie.root;
        let prefix = "";
        for (let char of words[i]) {
            if (!node.children[char]) break;
            prefix += char;
            node = node.children[char];
            if (node.isEnd) {
                words[i] = prefix;
                break;
            }
        }
    }

    return words.join(" ");
};