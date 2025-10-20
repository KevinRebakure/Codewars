package com.hyperskill.exercises;

import java.lang.Integer;
import java.util.*;

public class SortingDigitsOfAnIntegerInAscendingOrder {
    public static void main(String[] args) {

        Scanner scanner = new Scanner(System.in);
        int number = scanner.nextInt();

        List<Integer> digitsArray = convertToList(number);

        System.out.println(digitsArray.stream().sorted().toList());

        scanner.close();
    }

    public static List<Integer> convertToList(int number){
        String stringNumber = String.valueOf(number);
        ArrayList<String> digits = new ArrayList<>(Arrays.asList(stringNumber.split("")));
        return digits.stream().map(Integer::parseInt).toList();
    }
}
