//https://www.codewars.com/kata/58b8c94b7df3f116eb00005b/train/java
package com.codewars;

public class ReverseLetter7kyu {
    static void main(String[] args) {
        System.out.println(reverseLetter("kevin"));
    }

    static String reverseLetter(final String str) {
        return new StringBuilder(str.replaceAll("[^A-Za-z]", "")).reverse().toString();
    }
}
