const names = ['Alice', 'Bob', 'Charlie', 'Dave'];

const keyValueNames = names.map((value, index, array) => {
  return {keys: value};
});


console.log(keyValueNames);