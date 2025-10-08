package com.hyperskill.exercises;

import java.util.Scanner;

public class Factorial {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        // TODO: 1. Ask user for an integer 'n' using scanner.nextInt()

        int n = scanner.nextInt();
        int factorial = 1;
        // TODO: 2. Print the factorial of 'n'

        for (int i = 1; i <= n; i++) {
            factorial = factorial * i;
        }

        System.out.println(factorial);

        scanner.close(); // Always close the scanner when done
    }

}