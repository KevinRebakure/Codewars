package com.ultimate_design_patterns.behavioral.memento;

import java.util.Stack;

public class Editor {
    private String value;

    private final Stack<String> valueStack = new Stack<>();
    private final Stack<String> undoStack = new Stack<>();

    public String getValue() {
        return value;
    }

    public void setValue(String value) {
        valueStack.push(value);
        this.value = valueStack.peek();
    }

    public void undo() {
        String removedValue = valueStack.pop();
        undoStack.push(removedValue);
        value = valueStack.peek();
    }

    public void redo() {
        String removedValue = undoStack.pop();
        valueStack.push(removedValue);
        value = valueStack.peek();
    }
}
