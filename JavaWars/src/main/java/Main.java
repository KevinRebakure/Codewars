import java.text.NumberFormat;

public class Main {
    static void main(String[] args) {
        NumberFormat percentage = NumberFormat.getCurrencyInstance();
        String result = percentage.format(12345126.1234);
        System.out.println(result);
    }
}