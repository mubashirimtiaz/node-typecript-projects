const name = 'muBasHir aLi';

// UPPERCASE

console.log(name.toUpperCase());

// LOWERCASE

console.log(name.toLowerCase());

// TITLECASE

console.log(
  name.replace(/\w*/g, function (txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  })
);
