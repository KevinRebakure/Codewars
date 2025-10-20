//https://www.codewars.com/kata/568dcc3c7f12767a62000038/train/java
package com.codewars;

public class SetAlarm8kyu {
    static void main(String[] args) {
        String refernce = "C:\\Users\\TheGym\\Documents\\Codewars\\JavaWars\\src\\main\\java\\com\\codewars\\SetAlarm8kyu.java";
        System.out.println(refernce.replaceAll("\\\\", "/"));

    }

    public static boolean setAlarm(boolean employed, boolean vacation) {
        return employed && !vacation;
    }
}
