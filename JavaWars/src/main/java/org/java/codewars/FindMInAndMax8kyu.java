package org.java.codewars;

import java.util.Arrays;

public class FindMInAndMax8kyu {
    public int min(int[] list) {
        return Arrays.stream(list).min().getAsInt();
    }

    public int max(int[] list) {
        return Arrays.stream(list).max().getAsInt();
    }

    static void main(String[] args) {

    }
}
