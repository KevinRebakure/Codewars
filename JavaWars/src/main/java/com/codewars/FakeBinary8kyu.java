//https://www.codewars.com/kata/57eae65a4321032ce000002d/train/java
package com.codewars;

public class FakeBinary8kyu {
    public static String fakeBin(String numberString) {
        String result = "";

        for (int i = 0; i < numberString.length(); i++) {
            if (Integer.parseInt(numberString.split("")[i]) < 5) result = result + "0";
            if (Integer.parseInt(numberString.split("")[i]) >= 5) result = result + "1";
        }

        return result;
    }

    public static String fakeBin2(String s) {
        return s.replaceAll("[1-4]","0").replaceAll("[^0]","1");
    }

    static void main(String[] args) {
        String name = "Kevin";
        System.out.println(name.split("")[0]);
    }
}
