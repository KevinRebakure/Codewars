//https://www.codewars.com/kata/57eae20f5500ad98e50002c5/train/java
package org.java.codewars;

public class RemoveStringSpaces8kyu {
    static void main(String[] args) {
        System.out.println(noSpace("8 8 Bi fk8h B 8 BB8B B B  B888 c hl8 BhB fd"));
    }

    public static String noSpace(final String x) {
        return x.trim().replace(" ", "");
    }
}
