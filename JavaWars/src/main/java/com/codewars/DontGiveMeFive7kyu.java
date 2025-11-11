//https://www.codewars.com/kata/5813d19765d81c592200001a/train/java
package com.codewars;

import java.util.Arrays;
import java.util.stream.IntStream;

public class DontGiveMeFive7kyu {
    static void main(String[] args) {
        System.out.println(dontGiveMeFive(1, 9));
    }
    static int dontGiveMeFive(int start, int end)
    {
        return (int) IntStream.rangeClosed(start, end)
                .filter( i -> !Arrays.asList(String.valueOf(i).split("")).contains("5")).count();
    }

}
