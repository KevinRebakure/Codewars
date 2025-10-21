package com.test;

import java.util.Map;

public class Main {
    static void main(String[] args) {
        Map<String, String> phoneBook = Map.of(
                "Kevin Rebakure", "0791900630",
                "Kevin", "0781888163",
                "Bob", "+1-202-555-0118",
                "James", "+1-202-555-0220",
                "Katy", "+1-202-555-0175"
        );

        var phoneBookEntries = phoneBook.entrySet();

        for (Map.Entry<String, String> value: phoneBookEntries) {
            System.out.println(value);
        }
    }
}
