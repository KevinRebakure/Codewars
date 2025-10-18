package org.java.codewars;

public class TransportationOnVacation7kyu {
    public static int rentalCarCost(int d) {
        // Your solution here
        int total = d * 40;

        if (d >= 7) return total - 50;
        if (d >= 3) return total - 20;
        return total;
    }
}
