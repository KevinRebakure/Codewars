package com.test;

import java.util.List;

public class Main {
    static void main(String[] args) {
        List<String> workDays = List.of("Monday", "Tuesday", "Wednesday", "Thursday", "Friday");
        List<String> weekends = List.of("Saturday", "Sunday");
        List<String> week = List.of();

        week.addAll(workDays);
        week.addAll(weekends);

        System.out.println(week);
    }
}
