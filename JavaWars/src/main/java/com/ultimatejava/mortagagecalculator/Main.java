package com.ultimatejava.mortagagecalculator;

public class Main {
    public static void main(String[] args) {
        int principal = (int) new ReadInput(1000, 1_000_000).readNumber("Principle: ");
        float annualInterest = (float) new ReadInput(1, 30).readNumber("Annual Interest Rate: ");
        byte years = (byte) new ReadInput(1, 30).readNumber("Period (Years): ");

        Display.printMortgage(principal, annualInterest, years);
        Display.printPaymentSchedule(principal, annualInterest, years);
    }
}