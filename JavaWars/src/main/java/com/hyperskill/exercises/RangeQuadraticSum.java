package com.hyperskill.exercises;

import java.util.List;
import java.util.stream.IntStream;

public class RangeQuadraticSum {
    public static long rangeQuadraticSum(int fromIncl, int toExcl) {
        List<Integer> numbers = IntStream.rangeClosed(fromIncl, toExcl - 1).boxed().toList();
        return numbers.stream().map(x -> x * x).mapToInt(Integer::intValue).sum();
//        return 0; // write your code with streams here
    }

    static void main(String[] args) {
        System.out.println(rangeQuadraticSum(5,6 ));
    }
}
