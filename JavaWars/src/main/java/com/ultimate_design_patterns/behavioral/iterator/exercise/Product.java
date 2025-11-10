package com.ultimate_design_patterns.behavioral.iterator.exercise;

public class Product {
    private int id;
    private String name;

    public Product(int id, String name) {
        this.id = id;
        this.name = name;
    }

    public String toString() {
        return "Product{id=" + this.id + ", name='" + this.name + "'}";
    }
}
