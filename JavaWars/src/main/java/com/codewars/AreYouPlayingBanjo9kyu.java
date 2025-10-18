//https://www.codewars.com/kata/53af2b8861023f1d88000832/train/java
package org.java.codewars;

public class AreYouPlayingBanjo9kyu {
    public static String areYouPlayingBanjo(String name) {
        return name.toLowerCase().startsWith("r") ?
                String.format("%s plays banjo", name) :
                String.format("%s does notplay banjo", name);
    }
}
