//https://www.codewars.com/kata/57356c55867b9b7a60000bd7/train/java
package com.codewars;

public class BasicMathematicalOperations8kyu {
    static void main(String[] args) {

    }
    public static Integer basicMath(String op, int v1, int v2) {
        return switch (op) {
            case "+" -> v1 + v2;
            case "-" -> v1 - v2;
            case "*" -> v1 * v2;
            case "/" -> v1 / v2;
            default -> 0;
        };
    };
}
