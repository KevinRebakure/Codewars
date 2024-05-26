/*
Create a function that performs a pivot operation,
on an array of objects, converting it from long to wide 
format based on specified keys.
*/

/*
const keys = ["id", "name"];
// const wideFormatData = pivotLongToWide(longFormatData, keys);
// console.log(wideFormatData);
output: {
    id: [ 1, 2, 3 ],
    name: [ 'Alice', 'Bob', 'Charlie' ]
}
*/

// const longFormatData = [
//     { id: 1, name: "Alice", age: 30 },
//     { id: 2, name: "Bob", age: 25 },
//     { id: 3, name: "Charlie", age: 35 }
// ];

const longFormatData = [
  { id: 1, lastName: "Dany", age: 30 },
  { id: 2, lastName: "Josue", age: 25 },
  { id: 3, lastName: "Noella", age: 35 }
];

function pivotLongToWide(arr) {
    // identifiers
    const a = Object.keys(arr[0])[0]
    const b = Object.keys(arr[0])[1]

    const values_1 = arr.map((person)=>{
        return person[a]
    })

    const values_2 = arr.map((person)=>{
        return person[b]
    })
    return {
        [a]: values_1,
        [b]: values_2
    }
}

console.log(pivotLongToWide(longFormatData))