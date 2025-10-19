package com.ultimatejava.MyTube;

public class User implements UserInterface {
    private String email;

    public User(String email) {
        this.email = email;
    }

    @Override
    public String getEmail() {
        return email;
    }

    @Override
    public void setEmail(String email) {
        this.email = email;
    }
}
