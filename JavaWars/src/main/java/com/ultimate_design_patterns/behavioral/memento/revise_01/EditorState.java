package com.ultimate_design_patterns.behavioral.memento.revise_01;

public class EditorState {
    private final String text;
    private final String title;

    public EditorState(String text, String title) {
        this.text = text;
        this.title = title;
    }

    public String getText() {
        return text;
    }

    public String getTitle() {
        return title;
    }
}
