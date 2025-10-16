package org.java.codewars;

public class TrafficLights8kyu {
    public static String updateLight(String current) {
        if (current == "green") return "yellow";
        if (current == "yellow") return "red";
        if (current == "red") return "green";
        return "";
    }

    static void main(String[] args) {

    }
}
