//https://www.codewars.com/kata/545a4c5a61aa4c6916000755/train/javascript
package com.codewars;

import java.util.List;

public class FindTheMiddelElement7kyu {
    static void main(String[] args) {
        var numbers = List.of(5, 10, 14);
        var sorted = numbers.stream().sorted().toList();
        System.out.println(numbers.indexOf(sorted.get(1)));
    }
}

// sort the list
// get the middle number
// find the index of the middle number in the unsorted array