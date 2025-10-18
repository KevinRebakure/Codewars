package com.test;

public class Example {
    static void main(String[] args) {
        var textArea = new TextInput("Kevin Rebakure");
        textArea.disable();

        UIController[] elements = {new TextInput("Kevin"), new SelectInput("Mangos")};

        for (UIController element : elements) {
            System.out.println(element.render());
        }
    }
}

class TextInput extends UIController {
    public String value;

    public TextInput(String value) {
        this.value = value;
    }

    @Override
    public String render() {
        return "This is the text input";
    }

    @Override
    public String toString() {
        return value;
    }

    public void setValue(String value) {
        this.value = value;
    }

    public String getValue() {
        return value;
    }
}

class SelectInput extends UIController {
    public String value;

    public SelectInput(String value) {
        this.value = value;
    }

    @Override
    public String render() {
        return "This is the select input";
    }

    @Override
    public String toString() {
        return value;
    }

    public void setValue(String value) {
        this.value = value;
    }

    public String getValue() {
        return value;
    }
}

class UIController {
    public boolean isEnabled = true;

    public boolean isEnabled() {
        return isEnabled;
    }

    public void enable() {
        isEnabled = true;
    }

    public void disable() {
        isEnabled = false;
    }

    public String render() {
        return "";
    };
}