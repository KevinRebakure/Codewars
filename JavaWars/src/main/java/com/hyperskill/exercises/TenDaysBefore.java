package com.hyperskill.exercises;

import java.time.LocalDate;
import java.util.Scanner;

public class TenDaysBefore {
    static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        String dateString = scanner.nextLine();

        LocalDate date = LocalDate.parse(dateString);

        System.out.println(date.minusDays(10));

        scanner.close();
    }
}
