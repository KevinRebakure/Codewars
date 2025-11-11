package com.ultimate_design_patterns.behavioral.command;

public class Main {
    static void main(String[] args) {
        var history = new History();
        var videoEditor = new VideoEditor();
        var removeTextCommand = new RemoveTextCommand(videoEditor);
        var addBackRemovedTextCommand = new UndoCommand(history);

        videoEditor.setText("First video");
        removeTextCommand.execute();

        addBackRemovedTextCommand.execute();
        System.out.println(videoEditor.getText());
    }
}
