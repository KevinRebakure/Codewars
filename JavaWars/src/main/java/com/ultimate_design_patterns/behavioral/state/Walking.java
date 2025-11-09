package com.ultimate_design_patterns.behavioral.state;

public class Walking implements TravelModeInterface {
    @Override
    public Object getEta() {
        System.out.println("Calculating ETA (walking)");
        return 4;
    }

    @Override
    public Object getDirection() {
        System.out.println("Calculating Direction (walking)");
        return 40;
    }
}
