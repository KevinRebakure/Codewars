package com.ultimate_design_patterns.behavioral.observer.exercise;

import java.util.ArrayList;
import java.util.List;

public abstract class StockDataSource {
    private final List<StockPriceObserver> observers = new ArrayList<>();

    public void addObserver(StockPriceObserver observer) {
        observers.add(observer);
    }

    public void removeObserver(StockPriceObserver observer) {
        observers.remove(observer);
    }

    public void notifyObservers() {
        for (StockPriceObserver observer : observers) {
            observer.update();
        }
    }
}
