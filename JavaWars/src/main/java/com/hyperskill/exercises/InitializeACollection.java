package com.hyperskill.exercises;

import java.util.ArrayList;

class InitializeACollection {
    ArrayList<String> list = new ArrayList<>();

    void init() {
        // add "one", "two", "three" to list field in this order
        list.add("one");
        list.add("two");
        list.add("three");
    }
}

class Test {
    public static void main(String[] args) {
        InitializeACollection main = new InitializeACollection();
        main.init();

        for (String str : main.list) {
            System.out.println(str);
        }
    }
}