//https://www.codewars.com/kata/51f2b4448cadf20ed0000386/train/java
package com.codewars;

import java.util.Arrays;

public class RemoveAnchorFromURL {
    static void main(String[] args) {
        System.out.println(removeUrlAnchor("www.codewars.com#about"));
    }

    public static String removeUrlAnchor(String url) {
        String[] modified = url.split("#");
        return modified[0];
    }
}
