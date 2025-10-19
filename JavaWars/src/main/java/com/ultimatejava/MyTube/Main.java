package com.ultimatejava.MyTube;

public class Main {

    public static void main(String[] args) {
        var database = new VideoDatabase();
        var encoder = new VideoEncoder();
        var emailService = new EmailService();

        var video = new Video();
        video.setFileName("birthday.mp4");
        video.setTitle("Jennifer's birthday");
        video.setUser(new User("john@domain.com"));

        var processor = new VideoProcessor(database, encoder, emailService);
        processor.process(video);
    }
}
