//https://www.codewars.com/kata/5601409514fc93442500010b/train/java
package com.codewars;

import java.util.Arrays;

public class HowGoodAreYouReally8kyui {
    static void main(String[] args) {

    }

    public static boolean betterThanAverage(int[] classPoints, int yourPoints) {
        double sum = 0;
        for (int i = 0; i < classPoints.length; i++) {
            sum += classPoints[i];
        }

        return yourPoints > sum / classPoints.length;
    }

    static boolean betterThanAverage2(final int[] classPoints, final int yourPoints) {
        return Arrays.stream(classPoints).average().orElse(0) < yourPoints;
    }
}
