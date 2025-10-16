package org.java.codewars;

public class AreaOrPerimeter8kyu {
    public static int areaOrPerimeter (int l, int w) {
        return l == w ? l * w : 2 * (l + w);
    }
}
