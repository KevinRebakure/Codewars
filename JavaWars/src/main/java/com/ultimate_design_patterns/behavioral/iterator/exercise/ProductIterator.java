package com.ultimate_design_patterns.behavioral.iterator.exercise;

public interface ProductIterator {
    public boolean hasNext();
    public void next();
    public Product currentValue();
}
