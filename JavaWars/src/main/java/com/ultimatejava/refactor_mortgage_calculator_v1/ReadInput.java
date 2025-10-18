package com.ultimatejava.refactor_mortgage_calculator_v1;

import java.util.Scanner;

public class ReadInput {
    private double value;

    private final double min;
    private final double max;

    public ReadInput(double min, double max) {
        this.min = min;
        this.max = max;
    }

    public double readNumber(String prompt) {
        Scanner scanner = new Scanner(System.in);
        while (true) {
            System.out.print(prompt);
            value = scanner.nextFloat();
            if (value >= min && value <= max)
                break;
            System.out.println("Enter a value between " + min + " and " + max);
        }

        return getValue();
    }

    private double getValue() {
        return value;
    }
}
