package com.test;

import java.util.HashSet;
import java.util.Iterator;
import java.util.Set;

public class Main {
    static void main(String[] args) {
        Set<Integer> numbers = new HashSet<>();

        numbers.add(1);
        numbers.add(2);
        numbers.add(3);
        numbers.add(4);
        numbers.add(5);

        Iterator<Integer> iterator = numbers.iterator();

        while (iterator.hasNext()) {
            int current = iterator.next();
            if (current < 4) {
                iterator.remove();
            }
        }

        System.out.println(numbers);
    }
}