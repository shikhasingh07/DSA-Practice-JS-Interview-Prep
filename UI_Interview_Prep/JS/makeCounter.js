function makeCounter(initialValue = 0) {
    let sum = initialValue ;
    console.log(sum)
    const counter = () => {
        sum += 1; 
        console.log(sum)
        return sum-1;
    }
    console.log(sum)
    return counter; 
 }
 
 const counter = makeCounter(9); 
 console.log(counter());
