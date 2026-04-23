var dividePlayers = function (skill) {
  skill.sort((a, b) => a - b);

  let left = 0,
    right = skill.length - 1;
  let sum = skill[0] + skill[skill.length - 1];
  let chms = 0;
  while (left <= right) {
    if (skill[left] + skill[right] === sum) {
      chms += skill[left] * skill[right];
    }else {
        return -1;
    }
    left++;
    right--;
  }

  return chms;
};

let skill = [3, 2, 5, 1, 3, 4];
console.log(dividePlayers(skill));
