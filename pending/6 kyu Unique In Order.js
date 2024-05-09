// uniqueInOrder("AAAABBBCCDAABBB") == ["A", "B", "C", "D", "A", "B"];
// uniqueInOrder("ABBCcAD") == ["A", "B", "C", "c", "A", "D"];
// uniqueInOrder([1, 2, 2, 3, 3]) == [1, 2, 3];

let uniqueInOrder = (iterable)=>{
    return iterable.split('').filter((value, index)=>{
        if (index>0 && value[index-1]!=value || index == 0) {
            return value
        }
    })
};

console.log(uniqueInOrder('AAAABBBCCDAABBB'))