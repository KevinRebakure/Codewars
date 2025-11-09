package com.ultimate_design_patterns.behavioral.state;

public class Main {
    static void main(String[] args) {
        var directionService = new DirectionService(new Walking());

        directionService.getEta();
        directionService.getDirection();
    }
}
