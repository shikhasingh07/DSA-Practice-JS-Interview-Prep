var asteroidCollision = function (asteroids) {
  let stack = [];

  for (let item of asteroids) {
    let destroyed = false;
    while (stack[stack.length - 1] > 0 && item < 0) {
      const top = stack[stack.length - 1];

      if (top < Math.abs(item)) {
        // top explodes
        stack.pop();
      } else if (top === Math.abs(item)) {
        // both explode
        stack.pop();
        destroyed = true;
        break;
      } else {
        // item explodes
        destroyed = true;
        break;
      }
    }
    if (!destroyed) stack.push(item);
  }

  return stack;
};

let nums = [3, 5, -6, 2, -1, 4];
console.log(asteroidCollision(nums));
