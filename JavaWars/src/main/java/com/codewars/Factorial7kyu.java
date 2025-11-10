//https://www.codewars.com/kata/54ff0d1f355cfd20e60001fc/train/java
package com.codewars;

import java.util.List;
import java.util.stream.IntStream;

public class Factorial7kyu {
    static void main(String[] args) {
            System.out.println(factorial(5));
    }

    public static int factorial(int n){
            if ( n < 0 || n > 12) throw new IllegalArgumentException("Enter a number between 0 and 12");
            if (n == 0) return 0;
            if (n == 1) return 1;
            if (n == 2) return 2;

            List<Integer> range = IntStream.rangeClosed(1, n).boxed().toList();

            return range.stream().mapToInt(Integer::intValue).reduce(1, (a, b) -> a * b);
    }

    public static int factorial2(int n){
        if (n < 0 || n > 12) throw new IllegalArgumentException();
        return IntStream.rangeClosed(1, n).reduce(1, (a, b) -> a * b);
    }
}

// handle edge cases
// use reduce


