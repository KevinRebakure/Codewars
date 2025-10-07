package com.hyperskill.exercises;

import java.util.Scanner;

public class CompareLinesIgnoringWhitspaces {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        // start coding here

        String lineA = scanner.nextLine().trim().replaceAll(" ", "");
        String lineB = scanner.nextLine().trim().replaceAll(" ", "");

        System.out.println(lineA.equalsIgnoreCase(lineB));

        scanner.close();
    }
}
