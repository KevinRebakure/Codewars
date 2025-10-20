package com.ultimatejava.refactor_mytube;

public class EmailService implements EmailInterface {
    public void sendEmail(User user) {
        System.out.println("Notifying " + user.getEmail() + "...");
        System.out.println("Done!\n");
    }
}
