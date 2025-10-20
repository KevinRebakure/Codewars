package com.ultimatejava.refactor_mytube;

public class VideoEncoder implements EncoderInterface{
    public void encode(Video video) {
        System.out.println("Encoding video...");
        System.out.println("Done!\n");
    }
}
