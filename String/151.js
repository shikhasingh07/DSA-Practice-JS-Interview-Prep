var reverseWords = function(s) {
  // Step 1: split on spaces → ["", "", "the", "sky", "", "blue", ""]
  // Step 2: empty strings hatao (filter)
  // Step 3: reverse the array
  // Step 4: join with single space

  let arr = s.split(" ") , ans = []; 
  for(let i of arr){
    if(i !== ""){
        ans.push(i);
    }
  }
  ans.reverse();
  return ans.join(" ");
};
let s = "  the sky is blue  ";
console.log(reverseWords(s))