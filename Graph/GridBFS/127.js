var ladderLength = function (beginWord, endWord, wordList) {
    let wordSet = new Set(wordList);;
    let queue = [beginWord];
    let steps = 1;


    while (queue.length > 0) {
        let size = queue.length;
        for (let k = 0; k < size; k++) {
            let word = queue.shift();

            if (word === endWord) return steps;

            for (let i = 0; i < word.length; i++) {
                for (let c = 97; c <= 122; c++) {
                    let newWord = word.slice(0, i) + String.fromCharCode(c) + word.slice(i + 1);
                    if (wordSet.has(newWord)) {
                        queue.push(newWord);
                        wordSet.delete(newWord);  // visited mark
                    }
                }
            }

        }
        steps++;
    }

    return 0;
};
let beginWord = "hit", endWord = "cog", wordList = ["hot", "dot", "dog", "lot", "log", "cog"];
console.log(ladderLength(beginWord, endWord, wordList))