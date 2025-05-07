const semicolon = {
    name: "TechCorp",
    location: "San Fransisco",
    employees: [
        {id: 123, name: "Olabode", department: "Engineering"},
        {id: 328, name: "Suliha", department: "HR" },
        {id: 892, name: "Majek", department: "Marketing" },
        {id: 134, name: "Wonder", department: "Operations"},
        {id: 956, name: "Michael", department: "Finanace"}
    ]
}; 
console.log(`Second employee's name is: ${semicolon.employees[1].name}`)
const getEmployeeDetails = (semicolon)=> {
    for (let element in semicolon.employees){
        console.log(`${semicolon.employees[element].name}   ${semicolon.employees[element].department}`)
    }
        }
    getEmployeeDetails(semicolon)
module.exports = getEmployeeDetails;