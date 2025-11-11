//https://www.codewars.com/kata/5aa736a455f906981800360d/train/java

package com.codewars;

public class TheFeastofManyBeasts8kyu {
    static void main(String[] args) {
        System.out.println(feast("chickadee","dhocolate cake"));
    }

    static boolean feast(String beast, String dish) {

        return (beast.toLowerCase().charAt(0) == dish.toLowerCase().charAt(0)) &&
                (beast.toLowerCase().charAt(beast.length() - 1) == dish.toLowerCase().charAt(dish.length() - 1));
    }
}
