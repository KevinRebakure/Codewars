//https://www.codewars.com/kata/57eae65a4321032ce000002d/train/java
package org.java.codewars;

public class FakeBinary8kyu {
    public static String fakeBin(String numberString) {
        String result = "";

        for (int i = 0; i < numberString.length(); i++) {
            if (Integer.parseInt(numberString.split("")[i]) < 5) result = result + "0";
            if (Integer.parseInt(numberString.split("")[i]) >= 5) result = result + "1";
        }

        return result;
    }

    static void main(String[] args) {
        String name = "Kevin";
        System.out.println(name.split("")[0]);
    }
}
