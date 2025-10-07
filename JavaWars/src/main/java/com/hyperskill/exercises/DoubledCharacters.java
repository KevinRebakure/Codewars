package com.hyperskill.exercises;

import java.util.Scanner;

public class DoubledCharacters {
    static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        String text = scanner.next();

        String modifiedText = "";

        for (int i = 0; i < text.length(); i++) {
            modifiedText = modifiedText + text.charAt(i) + text.charAt(i);
        }

        System.out.println(modifiedText);

        scanner.close();
    }
}
