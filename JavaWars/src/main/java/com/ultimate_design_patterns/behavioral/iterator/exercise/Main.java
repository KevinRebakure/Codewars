package com.ultimate_design_patterns.behavioral.iterator.exercise;

public class Main {
    static void main(String[] args) {
        ProductCollection products = new ProductCollection();

        products.add(new Product(1, "shoes"));
        products.add(new Product(2, "phone"));
        products.add(new Product(3, "car"));
        products.add(new Product(4, "tv"));

        ProductIterator productIterator = products.createProductIterator();

        while (productIterator.hasNext()) {
            System.out.println(productIterator.currentValue());
            productIterator.next();
        }
    }
}
