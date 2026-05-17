var reconstructQueue = function (people) {
  let result = [];
  people.sort((a, b) => (a[0] !== b[0] ? b[0] - a[0] : a[1] - b[1]));
  
  for(let person = 0 ; person < people.length ; person++){
    result.splice(people[person][1], 0, people[person]);
  }
  console.log(people);
  return result;
};

let people = [
  [7, 0],
  [4, 4],
  [7, 1],
  [5, 0],
  [6, 1],
  [5, 2],
];
console.log(reconstructQueue(people));
