package com.ultimate_design_patterns.behavioral.memento.pattern;

import java.util.ArrayList;
import java.util.List;

public class History {
    private final List<DocumentState> history = new ArrayList<>();

    public void push(DocumentState snapshot) {
        history.add(snapshot);
    }

    public DocumentState pop() {
        int lastItemIndex = history.size() - 1;
        var lastItem = history.get(lastItemIndex);
        history.remove(lastItemIndex);
        return lastItem;
    }
}
