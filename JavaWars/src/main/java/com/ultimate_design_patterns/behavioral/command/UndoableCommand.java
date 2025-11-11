package com.ultimate_design_patterns.behavioral.command;

public interface UndoableCommand extends Command{
    void unexecute();
}
