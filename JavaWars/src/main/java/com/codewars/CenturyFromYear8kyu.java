//https://www.codewars.com/kata/5a3fe3dde1ce0e8ed6000097/train/java
package org.java.codewars;

public class CenturyFromYear8kyu {
    public static int century(int number) {
        // your code goes here
        return number % 100 == 0 ? number / 100 : (number / 100) + 1;
    }
}
