package com.hyperskill.exercises;

import java.util.Arrays;
import java.util.Iterator;
import java.util.List;
import java.util.Scanner;
import java.util.stream.Collectors;

public class FindmaxByIterator {

    public static int findMaxByIterator(Iterator<Integer> iterator) {
        double maxNumber = Double.NEGATIVE_INFINITY;

        while (iterator.hasNext()) {
            int current = iterator.next();
            if (current > maxNumber) {
                maxNumber = current;
            }
        }

        return (int) maxNumber;
    }

    /* Do not change code below */
    public static void main(String[] args) {

        final Scanner scanner = new Scanner(System.in);

        final List<Integer> list = Arrays.stream(scanner.nextLine().split("\\s+"))
                .map(Integer::parseInt)
                .collect(Collectors.toList());

        System.out.println(findMaxByIterator(list.iterator()));
    }
}