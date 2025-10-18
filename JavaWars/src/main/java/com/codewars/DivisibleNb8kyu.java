package com.codewars;

public class DivisibleNb8kyu {
    public static boolean isDivisible(long n, long x, long y) {
        return (n % x == 0) && (n % y == 0);
    }
}
