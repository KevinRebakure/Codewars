package com.ultimate_design_patterns.behavioral.strategy.exercise;

public class ChatClient {
    public void send(String message, Encryption encryption) {
        System.out.println("Sent: " + message);
        encryption.encrypt(message);
    }
}
