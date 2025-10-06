package org.example;

import java.util.Arrays;

public class SmallestIntegerInArray8kyu {
    static void main(String[] args) {
        System.out.println(findSmallestInt(new int[]{1,2,3,4}));
    }

    public static int findSmallestInt(int[] arr) {
        Arrays.sort(arr);
        return arr[0];
    }
}
