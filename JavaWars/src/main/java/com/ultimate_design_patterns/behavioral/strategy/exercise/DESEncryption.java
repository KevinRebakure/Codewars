package com.ultimate_design_patterns.behavioral.strategy.exercise;

public class DESEncryption implements Encryption{
    @Override
    public void encrypt(String file) {
        System.out.println("Encrypting a message with DES algorithm");
    }
}
