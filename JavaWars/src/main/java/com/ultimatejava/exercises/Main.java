package com.ultimatejava.exercises;

public class Main {
    public static void main(String[] args) {
        var employee01 = new Employee(50_000, 50);
        var employee02 = new Employee(50_000, 50);
        var employee03 = new Employee(50_000, 50);
        var employee04 = new Employee(50_000, 50);

        System.out.println(Employee.getNumberOfEmployees());
    }
}