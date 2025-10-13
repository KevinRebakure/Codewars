//https://www.codewars.com/kata/56676e8fabd2d1ff3000000c/train/java
package org.java.codewars;

public class FindNeedle8kyu {
    static void main() {
        System.out.println(findNeedle(new Object[]{"3", "123124234", null, "needle", "world", "hay", 2, "3", true, false}));
    }
    public static String findNeedle(Object[] haystack) {
        int positionOfNeedle = 0;
        for (int i = 0; i < haystack.length; i++) {
            if ("needle".equals(haystack[i])) {
                positionOfNeedle = i;
            }
        }

        return String.format("found the needle at position %d", positionOfNeedle);
    }
}
