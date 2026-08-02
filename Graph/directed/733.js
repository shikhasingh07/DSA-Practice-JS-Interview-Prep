function dfs(image, sr, sc, original, color) {

    if (sr < 0 || sc < 0 || sr >= image.length || sc >= image[0].length) return;

    if (image[sr][sc] !== original) return;

    image[sr][sc] = color;

    dfs(image, sr + 1, sc, original, color);
    dfs(image, sr - 1, sc, original, color);
    dfs(image, sr, sc + 1, original, color);
    dfs(image, sr, sc - 1, original, color);
}
var floodFill = function (image, sr, sc, color) {
    let original = image[sr][sc];
    if (original === color) return image;

    dfs(image, sr, sc, original, color);
    return image;
};
let image = [[0,0,0],[0,0,0]], sr = 0, sc = 0, color = 0;
console.log(floodFill(image, sr, sc, color))