package com.hyperskill.exercises;

import java.util.Scanner;

public class FizzBuzz {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int num = scanner.nextInt();

        // function calls of isDivByThree, isDivByFive, isDivByThreeAndFive will be here
        if (isDivByThreeAndFive(num)) {
            System.out.println("FizzBuzz");
        } else if (isDivByFive(num)) {
            System.out.println("Buzz");
        } else if (isDivByThree(num)) {
            System.out.println("Fizz");
        } else {
            System.out.println("None");
        }

        scanner.close();
    }

    public static boolean isDivByThree(int number) {
        return number % 3 == 0;
    }

    public static boolean isDivByFive(int number) {
        return number % 5 == 0;
    }

    public static boolean isDivByThreeAndFive(int number) {
        return number % 3 == 0 && number % 5 == 0;
    }

    // function isDivByThree will be here

    // function isDivByFive will be here

    // function isDivByThreeAndFive will be here
}
