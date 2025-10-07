package com.hyperskill.exercises;
import java.util.Scanner;

public class ModifyStringByChangingLettersAndDigits {
    public static String transformString(String s) {
        StringBuilder result = new StringBuilder();

        for (int i = 0; i < s.length(); i++) {
            char ch = s.charAt(i);

            if (Character.isLetter(ch)) {
                // If 'z', wrap around to 'a'
                if (ch == 'z') {
                    result.append('a');
                } else {
                    result.append((char) (ch + 1)); // next letter
                }
            } else if (Character.isDigit(ch)) {
                // If '0', wrap around to '9', else decrement
                if (ch == '0') {
                    result.append('9');
                } else {
                    result.append((char) (ch - 1));
                }
            }
        }

        return result.toString();
    }

    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        String s = input.nextLine();
        System.out.println(transformString(s));
        input.close();
    }
}
