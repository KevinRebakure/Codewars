package com.hyperskill.exercises;

import java.util.Scanner;

public class ReplaceAWithB {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        // start coding here

        String current = scanner.next();

        System.out.println(current.replaceAll("a" ,"b"));

        scanner.close();
    }
}
