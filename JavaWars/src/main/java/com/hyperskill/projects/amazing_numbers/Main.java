package com.hyperskill.projects.amazing_numbers;

public class Main {
    static void main(String[] args) {
        Input input = new Input();
        int number = input.readNumber();

        ProcessBuzz processor = new ProcessBuzz(number);
        processor.process();
    }
}
