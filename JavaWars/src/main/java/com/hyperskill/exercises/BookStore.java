package com.hyperskill.exercises;

import java.util.Scanner;

// Creating class
class BookExercise {
    // set up three private properties
    private String title;
    private String author;
    private int numberOfPages;

    public String getAuthor() {
        return author;
    }

    public int getNumberOfPages() {
        return numberOfPages;
    }

    public String getTitle() {
        return title;
    }

    public void setAuthor(String author) {
        if (!author.isEmpty()) {
            this.author = author;
        }
    }

    public void setNumberOfPages(int numberOfPages) {
        if (numberOfPages > 0 ) {
            this.numberOfPages = numberOfPages;
        }
    }

    public void setTitle(String title) {
        if (!title.isEmpty()) {
            this.title = title;
        }
    }

    // getters and setters go here
    // Remember:
    // 1. They must not allow empty string for 'title' and 'author'.
    // 2. They must not allow negative or zero value for 'numberOfPages'.
    // 3. If such values are attempted to be set, the property should remain unchanged.
}

public class BookStore {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        // Create an object of the BookExercise class
        BookExercise book = new BookExercise();

        String title = scanner.nextLine();
        String author = scanner.nextLine();
        int numberOfPages = scanner.nextInt();

        book.setTitle(title);
        book.setAuthor(author);
        book.setNumberOfPages(numberOfPages);

        System.out.println(book.getTitle());
        System.out.println(book.getAuthor());
        System.out.println(book.getNumberOfPages());

        // Take Title, Author and numberOfPages as next inputs and set them using the mutator methods
        // Your code here

        // Then use the accessor methods to get and print these values.
        // Your code here

        scanner.close();
    }
}