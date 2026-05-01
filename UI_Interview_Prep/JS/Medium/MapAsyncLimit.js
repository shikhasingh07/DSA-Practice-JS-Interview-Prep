async function mapAsyncLimit(iterable, callbackFn, size) {
  let result = [];
  for(let i = 0 ; i < iterable.length ; i += size){
    const chunk = iterable.slice(i, i + size).map(callbackFn);
    const res = await Promise.all(chunk);
    result.push(...res);
  }
  return result;
}

async function fetchUpperCase(q: string) {
  // Fake API service that converts a string to uppercase.
  const res = await fetch('https://uppercase.com?q=' + encodeURIComponent(q));
  return await res.text();
}

// Only a maximum of 2 pending requests at any one time.
const results = await mapAsyncLimit(
  ['foo', 'bar', 'qux', 'quz'],
  fetchUpperCase,
  2,
);
console.log(results);