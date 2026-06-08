Array.prototype.myFlat = (depth = 1) => {
    const arr = [];
    let len = 0;
    while (len < this.length) {
      let ans = [];
   
      for (let j = 0 ; j < size && len < this.length; j++) {
        ans.push(this[len]);
        len++;
      }
      arr.push(ans);
    }
}


let arr = [1, 2, 3, 4, 5, [6, 4, 3, 5, [1, 2, 3]]];
arr.myFlat()