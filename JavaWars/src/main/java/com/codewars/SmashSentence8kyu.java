package com.codewars;

public class SmashSentence8kyu {
    public static String smash(String... words) {
        return String.join(" ", words).trim();
    }

    static void main(String[] args) {
        System.out.println(smash(new String[]{"hello", "world", "this", "is", "great"}));
    }

}
