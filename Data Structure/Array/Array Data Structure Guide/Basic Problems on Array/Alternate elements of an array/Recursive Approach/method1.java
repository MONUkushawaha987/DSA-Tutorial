// Recursive Java Program to print alternate elements
// of the array

import java.util.ArrayList;

class Main {
    
    // Recursive function to store all alternate elements
    static void getAlternatesRec(int[] arr, int idx, 
                                 ArrayList<Integer> res) {
        if (idx < arr.length) {
            res.add(arr[idx]);
            getAlternatesRec(arr, idx + 2, res);
        }
    }

    static ArrayList<Integer> getAlternates(int[] arr) {
        ArrayList<Integer> res = new ArrayList<>();
        getAlternatesRec(arr, 0, res);
        return res;
    }

    public static void main(String[] args) {
        int[] arr = {10, 20, 30, 40, 50};
        ArrayList<Integer> res = getAlternates(arr);
        for (int x : res) {
            System.out.print(x + " ");
        }
    }
}