// Function to find the leaders in an array
function leaders(arr) {
    const result = [];
    const n = arr.length;
    
    for (let i = 0; i < n; i++) {
        let j;
        // Check elements to the right
        for (j = i + 1; j < n; j++) {
            // If a larger element is found
            if (arr[i] < arr[j])
                break;
        }
        
        // If no larger element was found
        if (j === n)
            result.push(arr[i]);
    }
    
    return result;
}

const arr = [16, 17, 4, 3, 5, 2];
const result = leaders(arr);

console.log(result.join(" "));