#include <iostream>
#include <vector>
using namespace std;

int findMax(vector<int>& arr, int i) {
  
   // Last index returns the element
    if (i == arr.size() - 1) {
        return arr[i];
    }

    // Find the maximum from the rest of the vector
    int recMax = findMax(arr, i + 1);

    // Compare with i-th element and return
    return max(recMax, arr[i]);
}

int largest(vector<int>& arr) {
  return findMax(arr,0);
}

int main() {
    vector<int> arr = {10, 324, 45, 90, 9808};
    cout << largest(arr);
    return 0;
}