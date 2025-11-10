package com.ultimate_design_patterns.behavioral.template_method.exercise;

public class CustomWindow extends Window{
    @Override
    protected void actionBeforeWindowClose() {
        System.out.println("Do something before closing the window");
    }

    @Override
    protected void actionAfterWindowClose() {
        System.out.println("Do something after closing the window");
    }
}
