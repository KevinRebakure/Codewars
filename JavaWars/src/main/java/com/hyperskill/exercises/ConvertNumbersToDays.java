package com.hyperskill.exercises;

import java.time.LocalDate;
import java.util.Scanner;

public class ConvertNumbersToDays {
    static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int year = scanner.nextInt();

        int day1 = scanner.nextInt();
        int day2 = scanner.nextInt();
        int day3 = scanner.nextInt();

        LocalDate date1 = LocalDate.ofYearDay(year, day1);
        LocalDate date2 = LocalDate.ofYearDay(year, day2);
        LocalDate date3 = LocalDate.ofYearDay(year, day3);

        System.out.println(date1);
        System.out.println(date2);
        System.out.println(date3);

        scanner.close();
    }
}
