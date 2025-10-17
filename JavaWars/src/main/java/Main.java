import java.time.LocalDate;

public class Main {
    public static void main(String[] args) {
        LocalDate date1 = LocalDate.ofYearDay(2017, 366);
        System.out.println(date1);
    }
}