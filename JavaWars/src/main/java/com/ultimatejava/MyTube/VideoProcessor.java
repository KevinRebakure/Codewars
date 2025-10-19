package com.ultimatejava.MyTube;

public class VideoProcessor implements ProcessorInterface {
    private final VideoDatabase database;
    private final VideoEncoder encoder;
    private final EmailService emailService;

    public VideoProcessor(VideoDatabase database, VideoEncoder encoder, EmailService emailService) {
        this.database = database;
        this.encoder = encoder;
        this.emailService = emailService;
    }

    @Override
    public void process(Video video) {
        encoder.encode(video);
        database.store(video);
        emailService.sendEmail(video.getUser());
    }
}
