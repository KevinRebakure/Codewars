package com.ultimate_design_patterns.behavioral.state;

public class Transit implements TravelModeInterface{
    @Override
    public Object getEta() {
        System.out.println("Calculating ETA (transit)");
        return 3;
    }

    @Override
    public Object getDirection() {
        System.out.println("Calculating Direction (transit)");
        return 30;
    }
}
