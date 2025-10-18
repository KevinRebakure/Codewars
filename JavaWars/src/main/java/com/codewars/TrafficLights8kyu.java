package com.codewars;

public class TrafficLights8kyu {
    public static String updateLight(String current) {
        if (current == "green") return "yellow";
        if (current == "yellow") return "red";
        if (current == "red") return "green";
        return "";
    }

    public static String updateLight2(String current) {
        switch (current) {
            case "red": return "green";
            case "yellow": return "red";
            case "green": return "yellow";
            default: throw new IllegalArgumentException();
        }
    }

    static void main(String[] args) {

    }
}
