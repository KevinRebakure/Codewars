//https://www.codewars.com/kata/5601409514fc93442500010b/train/java
package org.java.codewars;

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
}
