package com.hyperskill.exercises;

import java.util.Objects;

public class ImplementCompareToMethod {
    static void main(String[] args) {
        System.out.println("Interesting stuff!");
    }
}

class Person implements Comparable<Person> {
    private String name;
    private int age;
    private int height;
    private int weight;

    public Person(String name, int age, int height, int weight) {
        this.name = name;
        this.age = age;
        this.height = height;
        this.weight = weight;
    }

    public String getName() {
        return this.name;
    }

    public int getAge() {
        return this.age;
    }

    public int getHeight() {
        return this.height;
    }

    public int getWeight() {
        return this.weight;
    }

    @Override
    public int compareTo(Person otherPerson) {
        int nameComparison = getName().compareTo(otherPerson.getName());

        if (nameComparison != 0) {
            return nameComparison;
        }

        return Integer.compare(getAge(), otherPerson.getAge());
    }
}