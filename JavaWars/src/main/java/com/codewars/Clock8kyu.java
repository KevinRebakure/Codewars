//https://www.codewars.com/kata/55f9bca8ecaa9eac7100004a/train/java
package com.codewars;

public class Clock8kyu {
    static void main(String[] args) {

    }
    public static int Past(int h, int m, int s) {
        int hToMilliseconds = h * 60 * 60 * 1000;
        int mToMilliseconds = m * 60 * 1000;
        int sToMilliseconds = s * 1000;

        return hToMilliseconds + mToMilliseconds + sToMilliseconds;
    };
}
