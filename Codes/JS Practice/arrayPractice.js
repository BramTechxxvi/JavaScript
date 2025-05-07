let array = [];
array[0] = 1;
array[1] = "Chinedu";
array[2] = true;
array[3] = {name: "Sule", age: 28};
array[4] = [2,3,4,5,5]
array.push("Synonym")
array.push("Ola");
let num = array.pop();

let array2 = new Array(6);
array2[0] = 6;
array2[5] = 13;
array2.push("Bram")

let personas = [];
personas[0] = {name: "Olabode", age: 12, color: "Black"};
personas[1] = {name: "Hawanat", age: 34, color: "Dark Skin"};
personas[2] = {name: "Yusef", age: 2, color: "Black(light)"};
personas[3] = {name: "Wisdom", age: 30, color: "light skin"}
console.log(personas.slice(-3));
console.log(personas);

let arrayObject = [
    {id: 124, name: "Suliha"},
    {id: 352, name: "Amidat"},
    {id: 178, name: "Apostle"}
]
let arrtemp = [1,2,3,4,5]
arrtemp.shift();
arrtemp.unshift(9);

let name = "Olabode, Lawal"
console.log(name.split(" "))
/*
ADVANCE ARRAY METHODS(some methods can be invoked to execute the function)
1. forEach
2. Filter
3. Map
4. Find
5. findIndex
 */