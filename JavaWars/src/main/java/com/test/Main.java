package com.test;

import java.util.stream.Stream;

class Main{
    static void main(String[] args) {
        long result = Stream.of(1, 2, 3, 4, 5).reduce(1, (x, y) -> x * y);
        System.out.println(result);
    }
}