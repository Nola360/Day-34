// SETS - Store UNIQUE values of any type

const set1 = new Set();

// Add values to set

set1.add(100);
set1.add(300);
set1.add('This is a set string');
set1.add({ name: 'James' });
set1.add(true);
set1.add(100); // this will not log

console.log(set1);

const set2 = new Set([1, true, 'String']);

console.log(set2); // will log set2 values

// GET COUNT OF SET
console.log(set1.size); // will log 4

// Check for values
console.log(set1.has(100)); //will log true


console.log(set1.has({ name: 'James' })); //its pointing to a diff loc in memory


// DELETE FROM SET
set1.delete(100);
console.log(set1);


// ITERATE THROUGH SETS

// For.. of loop
for (let item of set1) {
  console.log(item)
}

// forEach Loop

set1.forEach((value) => {
  console.log(value);
})


// CONVERT SETS INTO ARRAYS
const setArr = Array.from(set1);
console.log(setArr);
console.log(setArr[2]);


