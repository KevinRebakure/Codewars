package com.hyperskill.exercises;

import java.util.Scanner;

public class HarryPotterHouses {
    static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        // start coding here

        String house = scanner.next();

        switch (house) {
            case "gryffindor":
                System.out.println("bravery");
                return;
            case "hufflepuff":
                System.out.println("loyalty");
                return;
            case "slytherin":
                System.out.println("cunning");
                return;
            case "ravenclaw":
                System.out.println("intellect");
                return;
            default:
                System.out.println("not a valid house");
        }

        scanner.close();
    }
}
