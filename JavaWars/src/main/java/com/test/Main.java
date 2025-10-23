package com.test;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;

public class Main {
    static void main(String[] args) {
        try {
            System.out.println(readFileAsString("src/main/java/com/test/Example.java"));
        } catch (IOException e) {
            System.out.println("File not found!");
        }
    }

    public static String readFileAsString(String filePath) throws IOException {
        String file = new String(Files.readAllBytes(Paths.get(filePath)));
        return file;
    }
}
