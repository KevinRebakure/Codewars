package com.ultimate_design_patterns.behavioral.memento.revise_01;

import java.util.ArrayList;
import java.util.List;

public class EditorHistory {
    private final List<EditorState> history = new ArrayList<>();
    private final List<EditorState> redo = new ArrayList<>();

    public void push(EditorState state) {
        history.add(state);
    }

    public EditorState undo() {
        int index = history.size() - 1;

        redo.add(history.get(index));
        return history.remove(index);
    }

    public EditorState redo() {
        int index = redo.size() - 1;

        history.add(redo.get(index));
        return redo.remove(index);
    }
}
