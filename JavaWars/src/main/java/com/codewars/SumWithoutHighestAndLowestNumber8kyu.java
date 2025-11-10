package com.codewars;

import java.util.Arrays;
import java.util.List;
import java.util.stream.IntStream;

public class SumWithoutHighestAndLowestNumber8kyu {
    static void main(String[] args) {
        System.out.println(KataSum.sum(new int[] { 6, 2, 1, 8, 10}));
    }
}

class KataSum {
    public static int sum(int[] numbers) {
        if (numbers == null || numbers.length < 2) return 0;
        List<Integer> sortedNumbers = IntStream.of(numbers).sorted().boxed().toList().subList(1, numbers.length - 1);
        return sortedNumbers.stream().mapToInt(Integer::intValue).sum();
    }

    public static int method2(int[] numbers) {
        if(numbers == null || numbers.length < 2) return 0;
        Arrays.sort(numbers);
        return Arrays.stream(numbers).skip(1).limit(numbers.length-2).sum();
    }
}

// sort it
// slice