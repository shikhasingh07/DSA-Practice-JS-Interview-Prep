var carFleet = function (target, position, speed) {
  let stack = [];
  const cars = position.map((p, i) => [p, speed[i]]);
  cars.sort((a, b) => b[0] - a[0]);
  console.log(cars)
  for (let i = 0; i < cars.length; i++) {
    let time = (target - cars[i][0]) / cars[i][1]; 

    if(stack.length === 0 || time > stack[stack.length - 1]){
        stack.push(time);
    }
  }
  return stack.length;
};
let target = 12,
  position = [10, 8, 0, 5, 3],
  speed = [2, 4, 1, 1, 3];
console.log(carFleet(target, position, speed));
