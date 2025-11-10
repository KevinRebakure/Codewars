package com.ultimate_design_patterns.behavioral.strategy.exercise;

public class Main {
    static void main(String[] args) {
        var chat = new ChatClient();
        chat.send("Good morning!", new AESEncryption());
    }
}
