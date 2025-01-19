function findMax(arr, i) {
    // Last index returns the element
    if (i === arr.length - 1) {
        return arr[i];
    }

    // Find the maximum from the rest of the array
    let recMax = findMax(arr, i + 1);

    // Compare with i-th element and return
    return Math.max(recMax, arr[i]);
}

function largest(arr) {
    return findMax(arr, 0);
}

// Driver Code
const arr = [10, 324, 45, 90, 9808];
console.log(largest(arr));