package com.hyperskill.exercises;

import java.time.LocalDate;
import java.util.Scanner;

public class PrintDatesWithAnOffset {
    static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        LocalDate startingDate = LocalDate.parse(scanner.nextLine());
        int offset = scanner.nextInt();

        int currentYear = startingDate.getYear();
        LocalDate followingYear = LocalDate.ofYearDay(currentYear + 1, 1);

        LocalDate displayDate = startingDate;
        while (displayDate.isBefore(followingYear)) {
            System.out.println(displayDate);
            displayDate = displayDate.plusDays(offset);
        }

        scanner.close();
    }
}
