//https://www.codewars.com/kata/57cc981a58da9e302a000214/train/java
package com.codewars;

import java.util.Arrays;


class Kata {
    public static boolean smallEnough(int[] a, int limit) {
        return Arrays.stream(a).allMatch( x -> x < limit || x == limit);
    }
}