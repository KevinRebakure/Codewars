//https://www.codewars.com/kata/55cbd4ba903825f7970000f5/train/java
package com.codewars;

public class GradeBook8kyu {
    public static char getGrade(int s1, int s2, int s3) {
        double average = (s1 + s2 + s3) / 3.0;

        if (average < 60) return 'F';
        if (average < 70) return 'D';
        if (average < 80) return 'C';
        if (average < 90) return 'B';
        return 'A';
    }

    static void main(String[] args) {

    }
}
