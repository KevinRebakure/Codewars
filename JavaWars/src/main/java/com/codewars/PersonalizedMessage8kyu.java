package com.codewars;

public class PersonalizedMessage8kyu {
    static String greet(String name, String owner) {
        return name.equalsIgnoreCase(owner) ? "Hello boss" : "Hello guest";
    }

    static void main(String[] args) {

    }
}
