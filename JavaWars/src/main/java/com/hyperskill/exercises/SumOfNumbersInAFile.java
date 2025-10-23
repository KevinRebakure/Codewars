package com.hyperskill.exercises;

import java.io.File;
import java.io.IOException;
import java.nio.file.Paths;
import java.util.Scanner;

public class SumOfNumbersInAFile {
    static void main(String[] args) {
        String filePath = String.valueOf(Paths.get("src/main/java/com/hyperskill/exercises/assets/dataset_91033.txt"));
        File file = new File(filePath);

        try (Scanner scanner = new Scanner(file)) {
            int sum = 0;
            while (scanner.hasNext()) {
                sum += scanner.nextInt();
            }
            System.out.println(sum);
        } catch (IOException e) {
            System.out.println("File not found!");
        }
    }
}
