package com.test;

import java.util.List;

class Main{
    static void main(String[] args) {
        List<String> names = List.of("Patrick Ross", "Kelly Wood", "James Moore", "Janice Coleman", "Mary Carter");
        long something= names.stream()
                .filter(name -> name.length() < 12)
                .filter(name -> name.startsWith("J"))
                .count();
        System.out.println(something);
    }
}