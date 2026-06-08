function promiseRace(arg) {
  return new Promise((res, rej) => {
    arg.forEach((element) => {
      Promise.resolve(element).then(res).catch(rej);
    });
  });
}

promiseRace([
  new Promise((resolve) => setTimeout(() => resolve("slow"), 1000)),
  new Promise((resolve) => setTimeout(() => resolve("fast"), 100)),
]).then((result) => console.log(result)); // → 'fast' (100ms wins!)

// Example 2: First to reject wins too
promiseRace([
  new Promise((_, reject) => setTimeout(() => reject("error!"), 100)),
  new Promise((resolve) => setTimeout(() => resolve("slow"), 1000)),
]).catch((err) => console.log(err)); // → 'error!' (rejection wins the race)

// Example 3: Already resolved
promiseRace([Promise.resolve(1), Promise.resolve(2)]).then((result) =>
  console.log(result),
); // → 1 (first one wins)
