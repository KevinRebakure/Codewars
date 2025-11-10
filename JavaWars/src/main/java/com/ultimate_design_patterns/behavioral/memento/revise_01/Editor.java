package com.ultimate_design_patterns.behavioral.memento.revise_01;

public class Editor {
    private String text;
    private String title;
    private final EditorHistory editorHistory;

    public Editor(EditorHistory editorHistory) {
        this.editorHistory = editorHistory;
    }


    public void createState() {
        editorHistory.push(new EditorState(text, title));
    }

    public void restoreState(EditorState editorState) {
        text = editorState.getText();
        title = editorState.getTitle();
    }

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }
}
