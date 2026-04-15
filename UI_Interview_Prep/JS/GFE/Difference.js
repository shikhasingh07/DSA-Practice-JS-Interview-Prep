const difference = (arr1 , arr2) => {
    
    let result = []; 

    arr1.map(item => {
        if(!arr2.includes(item)){
            result.push(item)
        }
    })

   return result
}

console.log(difference([1, 2, 3, 4], [2, 3, 1]))