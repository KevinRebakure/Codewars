package com.ultimate_design_patterns.behavioral.command;

public class UndoCommand implements Command {
    private final History history;

    public UndoCommand(History history) {
        this.history = history;
    }

    @Override
    public void execute() {
        if (history.size() > 1)
            history.pop().execute();
    }
}
