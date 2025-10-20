package com.hyperskill.projects.amazing_numbers;

// Ask a user to enter a natural number
// If the number is not natural, print an error message
// Calculate and print the parity of the number
// Check whether is the number is a Buzz number and print the explanation
// Finish the program after printing the message

public class ProcessBuzz {
    private final int number;
    public ProcessBuzz(int number) {
        this.number = number;
    }

    public void process() {
        if (number < 0) {
            System.out.println("This number is not natural!");
        }
        calculateParityAndPrintResults();
        verifyBuzzAndPrintResults();
    }

    private void calculateParityAndPrintResults() {
        if (number % 2 == 0) {
            System.out.println("This number is Even.");
        } else {
            System.out.println("This number is Odd.");
        }
    }

    private void verifyBuzzAndPrintResults() {
        boolean isDivisibleBy7 = false;
        boolean endsWith7 = false;
        String reason = "";

        // is buzz if it's divisible by 7
        if (number % 7 == 0) {
            isDivisibleBy7 = true;
            reason = String.format("%d is divisible by 7.", number);
        }

        // is buzz if it ends with 7
        String stringifyNumber = String.valueOf(number);
        char[] digits = stringifyNumber.toCharArray();
        if (digits[digits.length - 1] == '7') {
            endsWith7 = true;
            reason = String.format("%d is ends with 7.", number);
        }

        // print messages
        if (isDivisibleBy7 && endsWith7){
            System.out.println("It is a Buzz number.");
            System.out.printf("%d is divisible by 7 and with 7.", number);
        } else if (isDivisibleBy7 || endsWith7) {
            System.out.println("It is a Buzz number.");
            System.out.println(reason);
        } else {
            System.out.println("It is not a Buzz number.");
            System.out.printf("%d is neither divisible by 7 nor does it end with 7.", number);
        }
    }
}
