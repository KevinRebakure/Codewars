//https://www.codewars.com/kata/539ee3b6757843632d00026b/train/java
package com.codewars;

import java.util.ArrayList;
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

    public static int[] capitalsImproved(String s){
        ArrayList<Integer> list = new ArrayList<Integer>();

        for (int i = 0; i < s.length(); i++) {
            if (Character.isUpperCase(s.charAt(i))) {
                list.add(i);
            }
        }

        return list.stream().mapToInt(Integer::intValue).toArray();
    }
}
