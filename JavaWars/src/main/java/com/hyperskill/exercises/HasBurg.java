package com.hyperskill.exercises;

import java.util.Scanner;

public class HasBurg {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        // start coding here
        String city = scanner.nextLine();

        if (city.length() < 4) {
            System.out.println(false);
        } else {
            System.out.println(city.toLowerCase().endsWith("burg"));
        }


        scanner.close();
    }
}
