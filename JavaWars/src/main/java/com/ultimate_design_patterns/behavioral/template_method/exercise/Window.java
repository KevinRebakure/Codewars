package com.ultimate_design_patterns.behavioral.template_method.exercise;

public abstract class Window {
    public void close() {
        actionBeforeWindowClose();

        System.out.println("Removing the window from the screen");

        actionAfterWindowClose();
    }

    protected abstract void actionBeforeWindowClose();

    protected abstract void actionAfterWindowClose();
}
