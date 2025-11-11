//https://www.codewars.com/kata/557cd6882bfa3c8a9f0000c1/train/java/
package com.codewars;

import java.util.Arrays;

public class ParseNiceIntFromCharProblem8kyu {
    static void main(String[] args) {
        System.out.println(howOld("1 year old"));
    }

    static int howOld(final String herOld) {
        return Integer.parseInt(Arrays.stream(herOld.split(" ")).toList().getFirst());
    }

    static int howOldEasy(final String herOld) {

        String[] s = herOld.split(" ");
        return Integer.valueOf(s[0]);

    }
}
