// MAPS - object the holds key-value pairs

const map1 = new Map();

// Set Keys
const key1 = 'This is a key 1 string!',
  key2 = ['Test'],
  key3 = function () { };

// Set map values by key

map1.set(key1, 'Value of key1');
map1.set(key2, 'Value of key2');
map1.set(key3, 'Value of key3');

// Get value by keys
console.log(map1.get(key1), map1.get(key2), map1.get(key3));

// Count value inside map
console.log(map1.size); // 3 key value pairs

// Iterating Maps

// Loops using for.. of to get keys and values

for (let [key, value] of map1) {
  console.log(`${key} = ${value}`);
}


// Iterate keys only
for (let key of map1.keys()) {
  console.log(key);
}


// Iterate values only
for (let value of map1.values()) {
  console.log(value);
}

// FOR EACH - MAP
map1.forEach(function (value, key) {
  console.log(`${key} = ${value}`);
});



// CONVERT TO ARRAY

// Creat an arrray of the key value pairs

const keyValArr = Array.from(map1);
console.log(keyValArr);

// Creat an arrray of values

const valArr = Array.from(map1.values());
console.log(valArr);

// Creat an arrray of keys

const keyArr = Array.from(map1.keys());
console.log(keyArr);

