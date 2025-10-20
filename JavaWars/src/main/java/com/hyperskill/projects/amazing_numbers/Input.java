package com.hyperskill.projects.amazing_numbers;

import java.util.Scanner;

public class Input {
    Scanner scanner;
    public Input() {
        this.scanner = new Scanner(System.in);
    }

    public int readNumber() {
        System.out.println("Enter a natural number: ");
        int number = scanner.nextInt();
        scanner.close();
        return number;
    }
}
