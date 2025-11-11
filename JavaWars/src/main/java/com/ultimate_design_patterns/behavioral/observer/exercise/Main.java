package com.ultimate_design_patterns.behavioral.observer.exercise;

public class Main {
    static void main(String[] args) {
        var amazonStock = new Stock("AMZ", 150);
        var listView = new StockListView();
        var statusBar = new StatusBar();

        amazonStock.addObserver(statusBar);
        amazonStock.addObserver(listView);

        amazonStock.setPrice(12);
        amazonStock.notifyObservers();

        listView.show();
        statusBar.show();
    }
}
