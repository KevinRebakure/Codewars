package com.codewars;

import java.util.List;

public class SumMixedArray8kyu {
    static void main(String[] args) {

    }
}


class MixedSum {

    /*
     * Assume input will be only of Integer o String type
     */
    public int sum(List<?> mixed) {
        return mixed.stream().mapToInt(n -> Integer.parseInt(n.toString())).sum();
    }
}