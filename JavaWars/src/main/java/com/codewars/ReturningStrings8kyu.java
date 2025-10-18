//https://www.codewars.com/kata/55a70521798b14d4750000a4/train/java
package com.codewars;

public class ReturningStrings8kyu {
    static void main(String[] args) {
        System.out.println(greet("Kevin Rebakure"));
    }
    public static String greet(String name) {
        return String.format("Hello, %s how are you doing today?", name);
    };
}
