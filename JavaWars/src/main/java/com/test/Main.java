package com.test;

public class Main {
    static void main(String[] args) {
        int a = 16;
        int b = 4;
        int remainder = --a % b++;
        System.out.println(remainder);
    }
}
