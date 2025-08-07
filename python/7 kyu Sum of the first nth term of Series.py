# https://www.codewars.com/kata/555eded1ad94b00403000071/train/python
def series_sum(n):
    total = 0
    denominator = 1
    for _ in range(n):
        total += 1 / denominator
        denominator += 3
    return "{:.2f}".format(total)


# method 2
def series_sum_2(n):
    return '{:.2f}'.format(sum(1.0/(3 * i + 1) for i in range(n)))