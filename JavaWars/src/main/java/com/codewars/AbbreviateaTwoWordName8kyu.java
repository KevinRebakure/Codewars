//https://www.codewars.com/kata/57eadb7ecd143f4c9c0000a3/train/java
package com.codewars;

public class AbbreviateaTwoWordName8kyu {
    static void main(String[] args) {
        System.out.println(abbrevName("Kevin Rebakure"));
    }
    public static String abbrevName(String name) {
        String firstName = name.split(" ")[0].toUpperCase();
        String lastName = name.split(" ")[1].toUpperCase();
        return String.format("%s.%s", firstName.charAt(0), lastName.charAt(0));
    }
}
