function largest(arr) {
    let max = arr[0];

    // Traverse from second and compare
    // every element with current max
    for (let i = 1; i < arr.length; i++)
        if (arr[i] > max)
            max = arr[i];

    return max;
}

// Driver Code
const arr = [10, 324, 45, 90, 9808];
console.log(largest(arr));