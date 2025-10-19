package com.ultimatejava.MyTube;

public class VideoEncoder implements EncoderInterface{
    public void encode(Video video) {
        System.out.println("Encoding video...");
        System.out.println("Done!\n");
    }
}
