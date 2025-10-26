package com.test;

import java.util.stream.Stream;

class Main {
    static void main(String[] args) {
        Stream.iterate(1, i -> i + 2)
                .skip(5)
                .limit(5)
                .forEach(n -> System.out.print(n + " "));

    }
}