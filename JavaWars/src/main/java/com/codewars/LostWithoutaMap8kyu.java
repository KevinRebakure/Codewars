//https://www.codewars.com/kata/57f781872e3d8ca2a000007e/train/java
package org.java.codewars;

import java.util.Arrays;

public class LostWithoutaMap8kyu {
    static void main(String[] args) {
        System.out.println(map(new int[]{1, 2, 3, 4}));
    }
    public static int[] map(int[] arr) {
        int[] doubledIntegers = new int[arr.length];

        for (int i = 0; i < arr.length; i++) {
            doubledIntegers[i] = arr[i] * 2;
        }

        return doubledIntegers;
    }
}
