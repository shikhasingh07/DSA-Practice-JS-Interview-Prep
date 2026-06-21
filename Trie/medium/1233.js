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
        let list = word.split("/");

        for (let char of list) {
            if (!node.children[char]) {
                node.children[char] = new TrieNode();
            }
            node = node.children[char];
        }
        node.isEnd = true;
    }

    search(word) {
        let node = this.root;

        for (let char of word.split("/")) {
            if (!node.children[char]) {
                return false;
            }
            node = node.children[char];
            if (node.isEnd) return true;
        }
        return false;
    }
}
var removeSubfolders = function (folder) {
    folder.sort((a, b) => (a < b ? -1 : 1));
    let result = [];
    let node = new Trie();
    for (let i = 0; i < folder.length; i++) {

        if (!node.search(folder[i])) {
            result.push(folder[i]);
        }
        node.insert(folder[i]);
    }
    return result;
};

let folder = ["/a", "/a/b", "/c/d", "/c/d/e", "/c/f"];
console.log(removeSubfolders(folder));
