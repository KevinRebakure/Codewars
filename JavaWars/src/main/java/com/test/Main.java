package com.test;

public class Main {
    static void main(String[] args) {
        System.out.println("Kevin");
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