let array = [
                ["car", 2000],
                ["Truck", 500],
                ["Bike", 6500]
]
//Q1
let answer = array[0][0]
console.log(answer)
// Q2
array.push(["Scooter", 1500])
console.log(array)
//Q3
array[0][2] = ["Toyota", "Nissan"]
array[1][2] = ["Ford"]
array[2][2] = ["Honda"]
console.log(array)