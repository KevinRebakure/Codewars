package com.ultimate_design_patterns.behavioral.memento.own;

public class Main {
    static void main(String[] args) {
        var editor = new Editor();
        editor.setValue("a");
        editor.setValue("b");
        editor.setValue("c");

//        System.out.println(editor.getValue());

        editor.undo();
        editor.undo();
        System.out.println(editor.getValue());

//        editor.redo();
//        System.out.println(editor.getValue());
    }
}
