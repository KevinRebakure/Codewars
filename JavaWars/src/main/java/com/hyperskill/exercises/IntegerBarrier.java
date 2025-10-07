package com.hyperskill.exercises;

import java.util.Scanner;

public class IntegerBarrier {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        // start coding here

        int sum = 0;
        for (int i = 0; scanner.hasNextInt(); i++) {
            int currentNumber = scanner.nextInt();

            if(currentNumber == 0 || sum >= 1000) {
                break;
            } else {
                sum += currentNumber;
            }
        }

        System.out.println(sum >= 1000 ? sum - 1000 : sum);

        scanner.close();
    }
}
