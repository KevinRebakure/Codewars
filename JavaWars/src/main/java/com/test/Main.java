package com.test;

import java.math.BigDecimal;

public class Main {
    static void main(String[] args) {
        BigDecimal x = new BigDecimal(0.1);
        BigDecimal y = new BigDecimal(0.2);
        System.out.println(x.add(y).doubleValue());
    }
}

class Car {
    private String brand;

    public Car(String brand) {
        this.brand = brand;
    }

    class Model {
        private String model;
        public Model(String model) {
            this.model = model;
        }

        public String getModel() {
            return model;
        }

        public void printBrand() {
            System.out.println(Car.this.brand);
        }
    }
}