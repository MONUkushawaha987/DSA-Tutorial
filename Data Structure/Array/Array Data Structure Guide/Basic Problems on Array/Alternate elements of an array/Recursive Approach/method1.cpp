// Recursive C++ Program to print alternate elements of the array

#include <iostream>
#include <vector>
using namespace std;

// Recursive function to store all alternate elements
void getAlternatesRec(vector<int> &arr, int idx, vector<int>& res) {
    if(idx < arr.size()) {
        res.push_back(arr[idx]);
        getAlternatesRec(arr, idx + 2, res);
    }
}

vector<int> getAlternates(vector<int> &arr) {
    vector<int> res;
    getAlternatesRec(arr, 0, res);
    return res;
}

int main() {
    vector<int> arr = {10, 20, 30, 40, 50};
    vector<int> res = getAlternates(arr); 
    for(int x: res)
        cout << x << " ";
}