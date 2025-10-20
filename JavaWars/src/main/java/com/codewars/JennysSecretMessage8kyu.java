//https://www.codewars.com/kata/55225023e1be1ec8bc000390/train/java
package com.codewars;

public class JennysSecretMessage8kyu {
    static void main(String[] args) {

    }

    public static String greet(String name) {
        if(name.equals("Johnny")){
            return "Hello, my love!";
        }

        return String.format("Hello, %s!", name);
    }
}
