package com.test;

import java.util.ArrayList;

public class Main {
    static void main(String[] args) {
        ArrayList<String> languages = new ArrayList<>();
        languages.add("Kinyarwanda");
        languages.add("English");
        languages.add("French");
        languages.add("Swahili");

        languages.forEach(System.out::println);
        languages.forEach(language -> System.out.println(language));
    }
}
