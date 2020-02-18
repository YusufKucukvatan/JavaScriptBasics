var map = new Map();

map.set("Madina", 120000);
map.set("Turhun", 100000);
console.log(map);

for(var [name,salary] of map){
    console.log(name,salary);
}
