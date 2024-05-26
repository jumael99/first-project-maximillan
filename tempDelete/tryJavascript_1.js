const array = [1, 'hello', true, 2, 'world', false, 3];
const withNumber = array.filter(myFunction);

function myFunction(value, index, array) {
  if (typeof value === "number") return value;
}

console.log(withNumber);
