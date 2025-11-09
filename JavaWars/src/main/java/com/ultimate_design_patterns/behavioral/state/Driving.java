package com.ultimate_design_patterns.behavioral.state;

public class Driving implements TravelModeInterface {
    @Override
    public Object getEta() {
        System.out.println("Calculating ETA (driving)");
        return 2;
    }

    @Override
    public Object getDirection() {
        System.out.println("Calculating Direction (driving)");
        return 20;
    }
}
