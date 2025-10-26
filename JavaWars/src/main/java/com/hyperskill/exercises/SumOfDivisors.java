package com.hyperskill.exercises;

import java.util.Scanner;
import java.util.stream.IntStream;

public class SumOfDivisors {
    static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int a = scanner.nextInt();
        int b = scanner.nextInt();
        int n = scanner.nextInt();
        int m = scanner.nextInt();

        System.out.println(sum(a, b, n, m));
    }

    /**
     * Calculates the sum of numbers in the range from a to b both inclusive
     * that are only divisible by n or m.
     *
     * @param a > 0
     * @param b > 0
     * @param n > 0
     * @param m > 0
     *
     * @return sum of numbers from the range that are only divisible by n or m
     */
    public static int sum(int a, int b, int n, int m) {
        return IntStream
                .rangeClosed(a, b)
                .boxed()
                .filter(x -> (x % n == 0) || (x % m == 0))
                .mapToInt(Integer::intValue).sum();
    }
}
