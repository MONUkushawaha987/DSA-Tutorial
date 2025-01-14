// Iterate JavaScript Program to print alternate elements of the array

function getAlternates(arr) {
    let res = [];
    
    // Iterate over all alternate elements
    for (let i = 0; i < arr.length; i += 2) {
        res.push(arr[i]);
    }
    return res;
}


// Driver Code
const arr = [10, 20, 30, 40, 50];
const res = getAlternates(arr);
console.log(res.join(" "));