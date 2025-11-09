package com.ultimate_design_patterns.behavioral.memento.pattern;

public class Main {
    static void main(String[] args) {
        var document = new Document();
        var history =  new History();

        document.setContent("a");
        history.push(document.createState());

        document.setContent("b");
        history.push(document.createState());

        document.setContent("c");
        history.push(document.createState());

        document.setContent("d");
        history.push(document.createState());

        document.restoreState(history.pop());
        document.restoreState(history.pop());
        document.restoreState(history.pop());

        System.out.println(document.getContent());
    }
}
