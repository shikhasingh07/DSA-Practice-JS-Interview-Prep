var maximumOddBinaryNumber = function(s) {
    let ones = 0, zeros = 0;
    s.split('').forEach(element => {
        element === '0' ? zeros ++ : ones++;
    });
    return '1'.repeat(ones - 1) + '0'.repeat(zeros) + '1';
    // ans , one , two 
    // loop for counting one and two 
    // count - one , two 
    // than try to create a odd in larger way
    // return cretaed string 
};

let s = "010"; 
console.log(maximumOddBinaryNumber(s));