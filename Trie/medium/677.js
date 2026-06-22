class TrieNode {
    constructor() {
        this.children = {};
        this.value = 0;
    }
}

class Trie {
    constructor(){
        this.root = new TrieNode();
    }

    insert(key , val){
        let node = this.root; 
        for(let char of key){
            if(!node.children[char]) node.children[char] = new TrieNode();
            node = node.children[char];
        }
        node.value = val;
    }

    sum(prefix){
        let node = this.root;
        for(let char of prefix){
            if(!node.children[char]) return 0;
            node = node.children[char];
        }
        return this._sumHelper(node);
    }

    _sumHelper(node){
        let sum = node.value;
        for(let child in node.children){
            sum += this._sumHelper(node.children[child]);
        }
        return sum;
    }
}

var MapSum = function () {
    this.trie = new Trie();
};

/** 
 * @param {string} key 
 * @param {number} val
 * @return {void}
 */
MapSum.prototype.insert = function (key, val) {
    this.trie.insert(key, val);
};

/** 
 * @param {string} prefix
 * @return {number}
 */
MapSum.prototype.sum = function (prefix) {
    return this.trie.sum(prefix);
};

