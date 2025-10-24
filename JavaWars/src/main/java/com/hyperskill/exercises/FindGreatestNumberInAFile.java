package com.hyperskill.exercises;

import java.io.File;
import java.io.FileNotFoundException;
import java.nio.file.Paths;
import java.util.*;

public class FindGreatestNumberInAFile {
    static void main(String[] args) {
        String filePath = String.valueOf(Paths.get("src/main/java/com/hyperskill/exercises/assets/dataset_91007.txt"));
        File file = new File(filePath);

        try (Scanner scanner = new Scanner(file)){
            List<Integer> numbers = new ArrayList<>();
            while (scanner.hasNext()) {
                numbers.add(scanner.nextInt());
            }
            System.out.println(Collections.max(numbers));
        } catch (FileNotFoundException e) {
            System.out.println("File not found!");
        }
    }
}
