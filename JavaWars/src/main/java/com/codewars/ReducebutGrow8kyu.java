package com.codewars;

import java.util.Arrays;
import java.util.stream.IntStream;

public class ReducebutGrow8kyu {
    static void main(String[] args) {

    }

    public static int grow(int[] x){
        int result = 1;

        for (int i = 0; i < x.length; i++) {
            result *= x[i];
        }
        return result;

    }

    public static int grow2(int[] x){
        return Arrays.stream(x).reduce(1 ,(a, b) -> a * b);
    }

    public static int grow3(int[] x){

        return IntStream.of(x).reduce(1, (a, b) -> a * b);

    }
}
