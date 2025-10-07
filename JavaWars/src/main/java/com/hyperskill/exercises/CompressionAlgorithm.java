package com.hyperskill.exercises;

import java.util.Scanner;

public class CompressionAlgorithm {
    static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        String rawValue = scanner.next();

        int count = 1;
        String encodedText = "";

        for (int i = 0; i < rawValue.length(); i++) {
            // Check if next character exists and is the same
            if (i < rawValue.length() - 1 && rawValue.charAt(i) == rawValue.charAt(i + 1)) {
                count++;
            } else {
                encodedText = encodedText + rawValue.charAt(i) + count;
                count = 1;
            }
        }

        System.out.println(encodedText);

        scanner.close();
    }
}
