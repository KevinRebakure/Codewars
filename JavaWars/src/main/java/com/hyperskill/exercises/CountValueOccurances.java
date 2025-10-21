package com.hyperskill.exercises;

import java.util.Collections;
import java.util.List;

public class CountValueOccurances {
    static void main(String[] args) {
        System.out.println(checkTheSameNumberOfTimes(3, List.of(9, 8,4,3,2), List.of(1, 3, 3, 3)));
    }

    public static boolean checkTheSameNumberOfTimes(int elem, List<Integer> list1, List<Integer> list2) {
        int elemInList1 = Collections.frequency(list1, elem);
        int elemInList2 = Collections.frequency(list2, elem);

        return elemInList1 == elemInList2;
    }
}
