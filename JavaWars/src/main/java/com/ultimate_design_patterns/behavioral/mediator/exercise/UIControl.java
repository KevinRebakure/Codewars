package com.ultimate_design_patterns.behavioral.mediator.exercise;

import java.util.ArrayList;
import java.util.List;

public abstract class UIControl {
    private List<EventHandler> eventHandlers = new ArrayList<>();

    public void addEventHandler(EventHandler eventHandler) {
        eventHandlers.add(eventHandler);
    }

    public void notifyEventHandlers() {
        for(var eventHandler : eventHandlers) {
            eventHandler.handleEvent();
        }
    }
}
