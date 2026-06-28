function result(candidate, n, idx, current, ans, target) {
  if (target === 0) {
    ans.push([...current]);
    return ans;
  }
  if (target < 0 || idx === n) {
    return [];
  }

  current.push(candidate[idx]);
  result(candidate, n, idx, current, ans, target - candidate[idx]);
  current.pop();
  result(candidate, n, idx + 1, current, ans, target);
}
var combinationSum = function (candidates, target) {
  let ans = [];
  result(candidates, candidates.length, 0, [], ans, target);
  return ans;
};

let candidates = [2, 3, 6, 7],
  target = 7;
console.log(combinationSum(candidates, target));
