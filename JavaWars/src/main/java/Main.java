public class Main {
    static void main(String[] args) {
        System.out.println("Line 1");
        System.out.println("Line 2");

        printNumbers();

        System.out.println("Line 3");
        System.out.println("Line 3");
    }

    public static void printNumbers() {
        for (int i = 0; i < 5; i++) {
            System.out.println(i);
        }
    }
}