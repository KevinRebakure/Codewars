package com.ultimatejava.mortagagecalculator;

import java.text.NumberFormat;

public class Display {
    public static void printMortgage(int principal, float annualInterest, byte years) {
        double mortgage = new Calculator(principal, annualInterest, years).calculateMortgage();
        String mortgageFormatted = NumberFormat.getCurrencyInstance().format(mortgage);
        System.out.println();
        System.out.println("MORTGAGE");
        System.out.println("--------");
        System.out.println("Monthly Payments: " + mortgageFormatted);
    }

    public static void printPaymentSchedule(int principal, float annualInterest, byte years) {
        System.out.println();
        System.out.println("PAYMENT SCHEDULE");
        System.out.println("----------------");
        for (short month = 1; month <= years * Calculator.MONTHS_IN_YEAR; month++) {
            double balance = new Calculator(principal, annualInterest, years).calculateBalance(month);
            System.out.println(NumberFormat.getCurrencyInstance().format(balance));
        }
    }
}
