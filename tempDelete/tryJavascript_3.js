const people = [{name: 'Alice', age: 20}, {name: 'Bob', age: 21}, {name: 'Charlie', age: 22}, {name: 'Dave', age: 23}];

const olderThan21 = ((value, index, array) => {
  return value.age > 21;
})

const personName = ((value, index, array) => {
  return `${value.name} is ${value.age}`;
})

const result = people.filter(olderThan21).map(personName);

console.log(result);