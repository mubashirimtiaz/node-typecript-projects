const myName: string = 'muBasHir aLi';

// UPPERCASE

console.log(myName.toUpperCase());

// LOWERCASE

console.log(myName.toLowerCase());

// TITLECASE

console.log(
  myName.replace(/\w*/g, function (txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  })
);
