package com.ultimatejava.refactor_mortgage_calculator_v1;

public class Calculator {
    final static byte MONTHS_IN_YEAR = 12;
    final static byte PERCENT = 100;

    private final int principal;
    private final float monthlyInterest;
    private final float numberOfPayments;

    public Calculator(int principal,
                      float annualInterest,
                      byte years) {
        this.principal = principal;
        this.monthlyInterest = annualInterest / PERCENT / MONTHS_IN_YEAR;
        this.numberOfPayments = years * MONTHS_IN_YEAR;
    }

    public double calculateMortgage() {
        return principal
                * (monthlyInterest * Math.pow(1 + monthlyInterest, numberOfPayments))
                / (Math.pow(1 + monthlyInterest, numberOfPayments) - 1);
    }

    public double calculateBalance(short numberOfPaymentsMade) {
        return principal
                * (Math.pow(1 + monthlyInterest, numberOfPayments) - Math.pow(1 + monthlyInterest, numberOfPaymentsMade))
                / (Math.pow(1 + monthlyInterest, numberOfPayments) - 1);
    }
}
