package com.ultimate_design_patterns.behavioral.memento.revise_01;

public class Main {
    static void main(String[] args) {
        var editorHistory = new EditorHistory();
        var editor = new Editor(editorHistory);

        editor.setText("a");
        editor.createState();

        editor.setText("b");
        editor.createState();

        editor.setText("c");
        editor.createState();

        editor.restoreState(editorHistory.undo());
        editor.restoreState(editorHistory.undo());
        editor.restoreState(editorHistory.redo());
        editor.restoreState(editorHistory.redo());

        System.out.println(editor.getText());
    }
}