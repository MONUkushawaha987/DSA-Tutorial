// JavaScript program to find the second largest element in the array
// using two traversals

function getSecondLargest(arr) {
    let n = arr.length;

    let largest = -1, secondLargest = -1;

    // Finding the largest element
    for (let i = 0; i < n; i++) {
        if (arr[i] > largest)
            largest = arr[i];
    }

    // Finding the second largest element
    for (let i = 0; i < n; i++) {
        
        // Update second largest if the current element is greater
        // than second largest and not equal to the largest
        if (arr[i] > secondLargest && arr[i] !== largest) {
            secondLargest = arr[i];
        }
    }
    return secondLargest;
}

let arr = [12, 35, 1, 10, 34, 1];
console.log(getSecondLargest(arr));