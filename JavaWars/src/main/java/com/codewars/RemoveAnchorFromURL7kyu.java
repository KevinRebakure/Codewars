//https://www.codewars.com/kata/51f2b4448cadf20ed0000386/train/java
package com.codewars;

public class RemoveAnchorFromURL7kyu {
    static void main(String[] args) {
        System.out.println(removeUrlAnchor("www.codewars.com#about"));
    }

    public static String removeUrlAnchor(String url) {
        String[] modified = url.split("#");
        return modified[0];
    }

    static String removeUrlAnchorWithRegEx(String url) {
        return url.replaceAll("#.*", "");
    }
}
