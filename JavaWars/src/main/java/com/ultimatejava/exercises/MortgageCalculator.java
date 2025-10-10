package com.ultimatejava.exercises;

import java.text.NumberFormat;
import java.util.Scanner;

// L -> principle
// n -> total number of payments to be made
// c -> interest
// p -> number of payments we have made

public class MortgageCalculator {
    final static byte PERCENT = 100;
    final static byte MONTHS_IN_YEAR = 12;

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int principal = (int) readValue(scanner, "Principe ($1k - $1M): ", 1000, 1_000_000);
        double annualInterestRate = readValue(scanner, "Annual Interest Rate: ", 0, 30);
        byte periodYears = (byte) readValue(scanner, "Period (Years): ", 1, 30);

        double mortgage = calculateMortgage(principal, annualInterestRate, periodYears);
        displayMortgage(mortgage);

        displayBalance(periodYears, principal, annualInterestRate);
        scanner.close();
    }

    public static void displayBalance(byte periodYears, int principal, double annualInterestRate) {
        System.out.println("BALANCE");
        System.out.println("-------");
        for (int i = 1; i <= periodYears * MONTHS_IN_YEAR; i++) {
            String  balance = NumberFormat
                    .getCurrencyInstance()
                    .format(calculateBalance(principal, annualInterestRate, periodYears * MONTHS_IN_YEAR, i));
            System.out.println(balance);
        }
    }

    public static void displayMortgage(double mortgage) {
        String formattedMortgage = NumberFormat.getCurrencyInstance().format(mortgage);
        System.out.println("MORTGAGE");
        System.out.println("--------");
        System.out.println("Mortgage: " + formattedMortgage);
    }

    public static double calculateMortgage(int principal, double annualInterestRate, byte periodYears) {
        double monthlyInterest = (annualInterestRate / PERCENT) / MONTHS_IN_YEAR;
        int numberOfPayments = periodYears * MONTHS_IN_YEAR;

        double mortgage = principal
                * (monthlyInterest * Math.pow(1 + monthlyInterest, numberOfPayments))
                / (Math.pow(1 + monthlyInterest, numberOfPayments) - 1);

        return mortgage;
    };

    public static double readValue(Scanner scanner, String message, int min, int max) {
        System.out.println(message);
        double value = scanner.nextDouble();

        while (!(value >= min && value <= max)) {
            System.out.println("Provide a value between " + min + " and " + max);
            value = scanner.nextDouble();
        }
        return value;
    };

    public static double calculateBalance(
            double principle,
            double interestRate,
            int paymentsToBeMade,
            int numberOfPaymentsMade) {
        // B = L[(1+c)^n - (1+c)^p]/[(1+c)^n-1]
        // p here symbol
        double x = Math.pow((1 + interestRate / PERCENT / MONTHS_IN_YEAR), paymentsToBeMade);
        double y = Math.pow((1 + interestRate / PERCENT / MONTHS_IN_YEAR), numberOfPaymentsMade);
        double balance = principle * ((x - y) / (x - 1));

        return balance;
    };
}
