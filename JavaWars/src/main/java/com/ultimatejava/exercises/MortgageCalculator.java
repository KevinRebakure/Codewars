package com.ultimatejava.exercises;

import java.text.NumberFormat;
import java.util.Scanner;

public class MortgageCalculator {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        // Get the principal
        System.out.print("Principal: ");
        int principal = scanner.nextInt();

        // Get annual interest rate
        System.out.print("Annual Interest Rate: ");
        double annualInterestRate = scanner.nextDouble();

        // Get period in years
        System.out.print("Period (Years): ");
        int periodYears = scanner.nextInt();

        // Convert annual rate to monthly and period to months
        final byte MONTHS_IN_YEAR = 12;
        final byte PERCENT = 100;

        double monthlyInterest = (annualInterestRate / PERCENT) / MONTHS_IN_YEAR;
        int numberOfPayments = periodYears * MONTHS_IN_YEAR;

        // Calculate mortgage using the correct formula
        double mortgage = principal
                * (monthlyInterest * Math.pow(1 + monthlyInterest, numberOfPayments))
                / (Math.pow(1 + monthlyInterest, numberOfPayments) - 1);

        // Display formatted mortgage
        String formattedMortgage = NumberFormat.getCurrencyInstance().format(mortgage);
        System.out.println("Mortgage: " + formattedMortgage);

        scanner.close();
    }
}
