package org.java.codewars;

import java.util.Scanner;

public class LongestWordInSentence {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        String sentence = scanner.nextLine();
        String[] parts = sentence.split(" ");
        // Your code here

        String longestWord = parts[0];

        for (int i = 1; i < parts.length; i++) {
            if (parts[i].length() > longestWord.length()) {
                longestWord = parts[i];
            }
        }

        System.out.println(longestWord);

        scanner.close();
    }
}
