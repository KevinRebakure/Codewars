package com.ultimate_design_patterns.behavioral.command;

public class RemoveTextCommand implements UndoableCommand {
    private final VideoEditor videoEditor;
    private String previousValue;

    public RemoveTextCommand(VideoEditor videoEditor) {
        this.videoEditor = videoEditor;
    }

    @Override
    public void unexecute() {
        videoEditor.setText(previousValue);
    }

    @Override
    public void execute() {
        previousValue = videoEditor.getText();
        videoEditor.removeText();
    }
}
