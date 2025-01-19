import java.io.*;
import java.util.*;

class Main {

    static int largest(int[] arr) {
        Arrays.sort(arr);
        return arr[arr.length - 1];
    }

    static public void main(String[] args) {
        int[] arr = { 10, 324, 45, 90, 9808 };
        System.out.println(largest(arr));
    }
}