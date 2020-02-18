var set = new Set();

set.add(10);
set.add(10);
set.add(10);
set.add("Yusuf");
set.add("Mizgin");
set.add("Mehmet");
set.add('$');
set.add(true);

console.log(set);

set.delete(10);

console.log(set);

//set.clear();

console.log(set.has("Yusuf"));

for(var each of set){
    console.log(each);
}
