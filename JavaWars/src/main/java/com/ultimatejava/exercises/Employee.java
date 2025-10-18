package com.ultimatejava.exercises;

public class Employee {
    private int baseSalary;
    private int hourlyRate;

    public int calculateWage(int extraHours) {
        return getBaseSalary() + (getHourlyRate() * extraHours);
    }

    public int getBaseSalary() {
        return baseSalary;
    }

    public void setBaseSalary(int baseSalary) {
        if (baseSalary <= 0)
            throw new IllegalArgumentException("The base salary can't be 0 or less.");

        this.baseSalary = baseSalary;
    }

    public int getHourlyRate() {
        return hourlyRate;
    }

    public void setHourlyRate(int hourlyRate) {
        if (hourlyRate <= 0)
            throw new IllegalArgumentException("The hourly rate can't be 0 or less.");

        this.hourlyRate = hourlyRate;
    }
}
