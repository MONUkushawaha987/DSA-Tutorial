// Recursive JavaScript Program to print alternate
// elements of the array

// Recursive function to store all alternate elements
function getAlternatesRec(arr, idx, res) {
    if (idx < arr.length) {
        res.push(arr[idx]);
        getAlternatesRec(arr, idx + 2, res);
    }
}

function getAlternates(arr) {
    let res = [];
    getAlternatesRec(arr, 0, res);
    return res;
}

// Driver Code
let arr = [10, 20, 30, 40, 50];
let res = getAlternates(arr);
console.log(res.join(" "));