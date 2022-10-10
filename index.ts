const users: string[] = ['admin', 'hassan', 'raza', 'sara', 'waleed'];

users.forEach((user: string): void => {
  if (user === 'admin') {
    console.log('Hello admin, would you like to see a status report?');
  } else {
    console.log(`Hello ${user}, thank you for logging in again.`);
  }
});
