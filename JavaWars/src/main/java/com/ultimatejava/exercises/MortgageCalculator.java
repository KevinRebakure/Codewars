package com.ultimatejava.exercises;

import java.text.NumberFormat;
import java.util.Scanner;

public class MortgageCalculator {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        // Get the principal
        System.out.print("Principal ($1k - $1M): ");
        int principal = scanner.nextInt();
        while (!(principal >= 1000 && principal <= 1_000_000)) {
            System.out.print("Enter a number between 1,000 and 1,000,000: ");
            principal = scanner.nextInt();
        }

        // Get annual interest rate
        System.out.print("Annual Interest Rate: ");
        double annualInterestRate = scanner.nextDouble();
        while (!(annualInterestRate > 0 && annualInterestRate<=30)){
            System.out.println("Enter a value greater than 0 and less than or equal to 30: ");
            annualInterestRate = scanner.nextDouble();
        }

        // Get period in years
        System.out.print("Period (Years): ");
        byte periodYears = scanner.nextByte();
        while (!(periodYears >= 0 && periodYears <= 30)) {
            System.out.println("Enter a value between 1 and 30: ");
            periodYears = scanner.nextByte();
        }

        // Display formatted mortgage
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
}
