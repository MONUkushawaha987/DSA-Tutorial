#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

int largest(vector<int>& arr) {
    return *max_element(arr.begin(), arr.end());
}

int main() {
    vector<int> arr = {10, 324, 45, 90, 9808};
    cout << largest(arr);
    return 0;
}