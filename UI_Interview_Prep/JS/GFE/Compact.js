const compact = (arr) => {
  const ans = arr.filter(Boolean);
  return ans;
};

console.log(compact([0, 1, false, 2, "", 3, null]));
