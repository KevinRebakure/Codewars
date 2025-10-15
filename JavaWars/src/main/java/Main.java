import java.util.Optional;

public class Main {
    public static void main(String[] args) {
        Test person = new Test("Kevin", 12);
    }
}

class Test {
    private String name;
    private int age;
    public Test(String name, int age) {
        this.name = name;
        this.age = age;
    }
}
