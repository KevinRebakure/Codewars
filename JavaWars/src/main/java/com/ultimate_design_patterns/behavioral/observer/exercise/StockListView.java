package com.ultimate_design_patterns.behavioral.observer.exercise;

import java.util.ArrayList;
import java.util.List;

public class StockListView implements StockPriceObserver {
    private List<Stock> stocks = new ArrayList<>();

    public void addStock(Stock stock) {
        stocks.add(stock);
    }

    public void show() {
        for (var stock : stocks)
            System.out.println(stock);
    }

    @Override
    public void update() {
        System.out.println("Stock list view notified");
    }
}
