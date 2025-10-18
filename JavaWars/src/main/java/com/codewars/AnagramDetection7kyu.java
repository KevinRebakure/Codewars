//https://www.codewars.com/kata/529eef7a9194e0cbc1000255/train/java
package com.codewars;

import java.lang.reflect.Array;
import java.util.Arrays;

public class AnagramDetection7kyu {
    public static boolean isAnagram(String a, String b) {
        String aLowerCase = a.toLowerCase();
        String bLowerCase = b.toLowerCase();

        if (a.length() != b.length())  return false;
        String[] aChars = aLowerCase.split("(?<=.)"); // AI.<fix>

        // Check to see if each character is in both a and b
        boolean shareSimilarCharacters = Arrays.stream(aChars).allMatch(bLowerCase::contains);

        // Check if each character has the same number of occurances
        boolean sameNumberOfOccurances = Arrays
                .stream(aLowerCase.split(""))
                .allMatch(c -> {
                    int cFrequencyInA = aLowerCase.length() - aLowerCase.replace(c, "").length();
                    int cFrequencyInB = bLowerCase.length() - bLowerCase.replace(c, "").length();

                    return cFrequencyInA == cFrequencyInB;
                });

        return shareSimilarCharacters && sameNumberOfOccurances;

    }

    public static boolean isAnagramMethod2(String a, String b) {
        if (a.length() != b.length())  return false;

        char[] aCharacters = a.toLowerCase().toCharArray();
        char[] bCharacters = b.toLowerCase().toCharArray();

        Arrays.sort(aCharacters);
        Arrays.sort(bCharacters);

        return Arrays.equals(aCharacters, bCharacters);
    }

    static void main(String[] args) {
        System.out.println(isAnagramMethod2("aab", "baa"));
    }
}
