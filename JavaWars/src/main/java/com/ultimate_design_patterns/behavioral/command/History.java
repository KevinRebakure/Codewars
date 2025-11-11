package com.ultimate_design_patterns.behavioral.command;

import java.util.ArrayDeque;
import java.util.Deque;

public class History {
    private final Deque<UndoableCommand> history = new ArrayDeque<>();

    public void add(UndoableCommand command){
        history.push(command);
    }

    public UndoableCommand pop(){
        return history.pop();
    }

    public int size() {
        return history.size();
    }

}
