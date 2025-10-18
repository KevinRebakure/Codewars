package com.codewars;

import java.util.Arrays;

public class SortArrayByStringLength7kyu {
    static void main(String[] args) {
        String[] names= {"abcde", "abc", "d", "de", "abcd"};

        Arrays.sort(names, (a, b) -> Integer.compare(a.length(), b.length()));

        System.out.println(Arrays.toString(names));
    }
}
