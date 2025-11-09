package com.ultimate_design_patterns.behavioral.state;

public class DirectionService {
    private TravelModeInterface travelMode;

    public DirectionService(TravelModeInterface  travelMode) {
        this.travelMode = travelMode;
    }

    public Object getEta() {
        return travelMode.getEta();
    }

    public Object getDirection() {
        return travelMode.getDirection();
    }

    public TravelModeInterface getTravelMode() {
        return travelMode;
    }

    public void setTravelMode(TravelModeInterface travelMode) {
        this.travelMode = travelMode;
    }
}
