package com.ultimate_design_patterns.behavioral.iterator.exercise;

import java.util.ArrayList;
import java.util.List;

public class ProductCollection {
    private List<Product> products = new ArrayList();
    private int index;

    public void add(Product product) {
        this.products.add(product);
    }

    public ProductIterator createProductIterator() {
        return new ProductCollectionIterator();
    }

    private class ProductCollectionIterator implements ProductIterator {

        @Override
        public boolean hasNext() {
            return index < products.size();
        }

        @Override
        public void next() {
            index++;
        }

        @Override
        public Product currentValue() {
            return products.get(index);
        }
    }
}
