//https://www.codewars.com/kata/5a00e05cc374cb34d100000d/train/java
package org.java.codewars;

public class ReversedSequence8kyu {
    public static int[] reverse(int n){
        int[] result = new int[n];

        for (int i = n; i > 0 ; i--) {
            result[n-i] = i;
        }

        return result;
    }

    static void main(String[] args) {

    }
}
