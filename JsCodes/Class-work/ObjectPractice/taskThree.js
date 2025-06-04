const obj = {
count: 10,
step: 5,
add: function() {
obj.count += obj.step;
}};
obj.add();
console.log(obj.count)