package com.test;

import java.io.File;
import java.io.FileWriter;
import java.io.IOException;
import java.nio.file.Paths;

public class Main {
    static void main(String[] args) {
        String pathName = String.valueOf(Paths.get("src/main/java/com/test/text.txt"));

        File file = new File(pathName);
        try(FileWriter fileWriter = new FileWriter(file, true)) {
            fileWriter.write("I am the founder of rebakure.com\\n");
        } catch (IOException e) {
            System.out.println("File not found");
        }

    }
}
