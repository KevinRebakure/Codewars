//https://www.codewars.com/kata/5672a98bdbdd995fad00000f/train/java
package org.java.codewars;

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



    static void main(String[] args) {

    }
}
