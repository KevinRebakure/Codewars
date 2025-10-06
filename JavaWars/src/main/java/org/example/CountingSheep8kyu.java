//https://www.codewars.com/kata/54edbc7200b811e956000556/solutions/java
package org.example;

public class CountingSheep8kyu {
    static void main(String[] args) {
        System.out.println(countSheeps(new Boolean[] {true,  true,  true,  false,
                true,  true,  true,  true ,
                true,  false, true,  false,
                true,  false, false, true ,
                true,  true,  true,  true ,
                false, false, true,  true}));
    }

    public static int countSheeps(Boolean[] arrayOfSheep) {
        int count= 0;

        for (Boolean sheep : arrayOfSheep) {
            if (sheep != null && sheep) {
                count++;
            }
        }

        return count;
    }
}
