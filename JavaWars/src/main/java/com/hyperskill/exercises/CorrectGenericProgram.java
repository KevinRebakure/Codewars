package com.hyperskill.exercises;

public class CorrectGenericProgram {
    public static void main(String[] args) {
        // correct the next line
        var printer = new Printer<>();

        // do not change the code below
        printer.set("value");
        printer.print();
    }
}

class Printer<T> {
    private T value;

    void set(T value) {
        this.value = value;
    }

    void print() {
        System.out.println("Passed value: " + value);
    }
}