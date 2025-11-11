package com.ultimate_design_patterns.behavioral.command;

public class AddBackRemovedText implements Command {
    private final RemoveTextCommand removeTextCommand;

    public AddBackRemovedText(RemoveTextCommand removeTextCommand) {
        this.removeTextCommand = removeTextCommand;
    }

    @Override
    public void execute() {
        removeTextCommand.unexecute();
    }
}
