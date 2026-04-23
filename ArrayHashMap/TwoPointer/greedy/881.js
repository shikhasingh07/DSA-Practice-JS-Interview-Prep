var numRescueBoats = function (people, limit) {
    people.sort((a, b) => a - b)
    let count = 0;

    let [i, j] = [0, people.length - 1];

    while (i <= j) {
        count++;
        if (people[i] + people[j] <= limit) i++;

        j--;
      
    }
    return count;
};

console.log(numRescueBoats([1,2],3))