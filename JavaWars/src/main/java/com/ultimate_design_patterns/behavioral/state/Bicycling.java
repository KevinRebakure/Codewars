package com.ultimate_design_patterns.behavioral.state;

public class Bicycling implements TravelModeInterface {
    @Override
    public Object getEta() {
        System.out.println("Calculating ETA (bicycling)");
        return 1;
    }

    @Override
    public Object getDirection() {
        System.out.println("Calculating Direction (bicycling)");
        return 10;
    }
}
