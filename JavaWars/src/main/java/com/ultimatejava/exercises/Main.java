package com.ultimatejava.exercises;

public class Main {
    public static void main(String[] args) {
        var employee = new Employee();
        employee.setBaseSalary(50_000);
        employee.setHourlyRate(12);
        int wage = employee.calculateWage(2);
        System.out.println(wage);
    }
}