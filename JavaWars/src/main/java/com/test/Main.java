package com.test;

import java.util.List;

class Main{
    static void main(String[] args) {
        List<String> companies = List.of(
                "Google", "Amazon", "Samsung",
                "GOOGLE", "amazon", "Oracle"
        );

        companies.stream().map(String::toUpperCase).distinct().forEach(System.out::println);
    }
}