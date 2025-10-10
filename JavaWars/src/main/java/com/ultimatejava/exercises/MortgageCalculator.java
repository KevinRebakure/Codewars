package com.ultimatejava.exercises;

import java.text.NumberFormat;
import java.util.Scanner;

public class MortgageCalculator {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int principal = (int) readValue(scanner, "Principe ($1k - $1M): ", 1000, 1_000_000);
        double annualInterestRate = readValue(scanner, "Annual Interest Rate: ", 0, 30);
        byte periodYears = (byte) readValue(scanner, "Period (Years): ", 1, 30);

        double mortgage = calculateMortgage(principal, annualInterestRate, periodYears);
        String formattedMortgage = NumberFormat.getCurrencyInstance().format(mortgage);
        System.out.println("Mortgage: " + formattedMortgage);

        scanner.close();
    }

    public static double calculateMortgage(int principal, double annualInterestRate, byte periodYears) {
        final byte PERCENT = 100;
        final byte MONTHS_IN_YEAR = 12;

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
}
