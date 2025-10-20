//https://www.codewars.com/kata/539ee3b6757843632d00026b/train/java
package com.codewars;

import java.util.Arrays;

public class FindCapitals7kyu {
    static void main(String[] args) {
        String sample = "CodEWaRs";
        System.out.println(Arrays.toString(capitals("CodEWaRs")));
    }

    public static int[] capitals(String s){
        char[] characters = s.toCharArray();
        int[] indices = new int[characters.length];

        int track = 0;

        for (int i = 0; i < characters.length; i++) {
            if ((int) characters[i] < 97) {
                indices[track] = i;
                track++;
            }
        }

        return Arrays.copyOf(indices, track);
    }
}
