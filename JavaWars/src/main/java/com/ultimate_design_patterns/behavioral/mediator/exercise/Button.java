package com.ultimate_design_patterns.behavioral.mediator.exercise;

public class Button extends UIControl {
    private boolean isEnabled;

    public boolean isEnabled() {
        return isEnabled;
    }

    public void setEnabled(boolean enabled) {
        isEnabled = enabled;
    }
}
