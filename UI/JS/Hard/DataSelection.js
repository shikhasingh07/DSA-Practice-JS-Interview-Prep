function selectData(sessions, options) {
  // loop all
  // check user ID
  // create a map and put in that
  // cehck and put

  let result = [];
  if (options?.merge) {
    let map = {};
    let last = {};
    for (let i = 0; i < sessions.length; i++) {
      const { user, duration, equipment } = sessions[i];
      if (map[user]) {
        map[user].duration += duration;
        map[user].equipment = [...map[user].equipment, ...equipment];
      } else {
        map[user] = { user, duration, equipment: [...equipment] };
      }
      last[user] = i;
    }
    Object.values(map).forEach((session) => {
      session.equipment = [...new Set(session.equipment)].sort();
    });
    for (let i = 0; i < sessions.length; i++) {
      const { user } = sessions[i];
      if (last[user] === i) {
        result.push(map[user]);
      }
    }
  } else {
    result = [...sessions];
  }

  return result.filter((item) => {
    return (
      (!options.user || item.user === options.user) &&
      (!options.minDuration || item.duration >= options.minDuration) &&
      (!options.equipment ||
        item.equipment.some((e) => options.equipment.includes(e)))
    );
  });
}

let arr = [
  { user: 8, duration: 50, equipment: ["bench"] },
  { user: 7, duration: 150, equipment: ["dumbbell", "kettlebell"] },
  { user: 1, duration: 10, equipment: ["barbell"] },
  { user: 7, duration: 100, equipment: ["bike", "kettlebell"] },
  { user: 7, duration: 200, equipment: ["bike"] },
  { user: 2, duration: 200, equipment: ["treadmill"] },
  { user: 2, duration: 200, equipment: ["bike"] },
];

console.log(selectData(arr));
