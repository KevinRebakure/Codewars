// Create a function that performs a JOIN operation on two arrays of objects,
//  based on a common property, and returns a new array of merged objects.

const employees = [
  { id: 1, name: "John", department: "IT" },
  { id: 3, name: "Doe", department: "IT" },
  { id: 2, name: "Jane", department: "HR" },
];

const salaries = [
  { id: 1, salary: 50000 },
  { id: 2, salary: 60000 },
  { id: 4, salary: 55000 },
];

const sortedEmployees = employees.sort((a,b)=>{
    return a.id - b.id
})
const sortedSalaries = salaries.sort((a,b)=>{
    return a.id - b.id
})

const joinedObject = sortedEmployees.filter((obj, indx)=>{
    if (obj.id == sortedSalaries[indx].id){
        return {...obj, salary: sortedSalaries[indx].salary}
    }
})

console.log(joinedObject)