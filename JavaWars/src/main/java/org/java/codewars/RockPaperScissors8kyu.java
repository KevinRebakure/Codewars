//https://www.codewars.com/kata/5672a98bdbdd995fad00000f/train/java
package org.java.codewars;

import java.util.HashMap;
import java.util.Map;

public class RockPaperScissors8kyu {
    public static String rps(String p1, String p2) {
        if (p1 == "scissors" && p2 == "paper") return "Player 1 won!";
        if (p1 == "scissors" && p2 == "rock") return "Player 2 won!";
        if (p1 == "paper" && p2 == "scissors") return "Player 2 won!";
        if (p1 == "paper" && p2 == "rock") return "Player 1 won!";
        if (p1 == "rock" && p2 == "paper") return "Player 2 won!";
        if (p1 == "rock" && p2 == "scissors") return "Player 1 won!";
        if (p1 == p2) return "Draw!";
        return "";
    }

    public static String rps2(String p1, String p2) {
        if (p1.equals(p2)) return "Draw!";

        Map<String, String> game = new HashMap<>();
        game.put("scissors", "paper");
        game.put("paper", "rock");
        game.put("rock", "scissors");

        String result = game.get(p1);
        if (result.equals(p2)) return "Player 1 won!";
        else                   return "Player 2 won!";
    }

    static void main(String[] args) {

    }
}
