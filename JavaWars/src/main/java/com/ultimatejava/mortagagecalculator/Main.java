package com.ultimatejava.mortagagecalculator;
import java.text.NumberFormat;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        int principal = (int) new ReadInput(1000, 1_000_000).readNumber("Principle: ");
        float annualInterest = (float) new ReadInput(1, 30).readNumber("Annual Interest Rate: ");
        byte years = (byte) new ReadInput(1, 30).readNumber("Period (Years): ");

        printMortgage(principal, annualInterest, years);
        printPaymentSchedule(principal, annualInterest, years);
    }

    private static void printMortgage(int principal, float annualInterest, byte years) {
        double mortgage = new Calculator(principal, annualInterest, years).calculateMortgage();
        String mortgageFormatted = NumberFormat.getCurrencyInstance().format(mortgage);
        System.out.println();
        System.out.println("MORTGAGE");
        System.out.println("--------");
        System.out.println("Monthly Payments: " + mortgageFormatted);
    }

    private static void printPaymentSchedule(int principal, float annualInterest, byte years) {
        System.out.println();
        System.out.println("PAYMENT SCHEDULE");
        System.out.println("----------------");
        for (short month = 1; month <= years * Calculator.MONTHS_IN_YEAR; month++) {
            double balance = new Calculator(principal, annualInterest, years).calculateBalance(month);
            System.out.println(NumberFormat.getCurrencyInstance().format(balance));
        }
    }
}

