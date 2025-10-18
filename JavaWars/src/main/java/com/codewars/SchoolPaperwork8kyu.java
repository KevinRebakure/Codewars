//https://www.codewars.com/kata/55f9b48403f6b87a7c0000bd/train/java
package com.codewars;

public class SchoolPaperwork8kyu {
    static void main(String[] args) {

    }

    public static int paperWork(int n, int m) {
        //Happy Coding! ^_^
        if (n < 0 || m < 0) return 0;

        return n * m;
    };

    public static int method2(int n, int m) {
        return Math.max(m, 0) * Math.max(n, 0);
    }
}
