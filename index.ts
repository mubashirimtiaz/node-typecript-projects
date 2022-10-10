const current_users: string[] = ['john', 'jane', 'joe', 'jim', 'ricky'];

const new_users: string[] = ['JIM', 'aladdin', 'JANE', 'jerry', 'alex'];

const current_user_set: Set<string> = new Set(current_users);

new_users.forEach((user: string): void => {
  if (current_user_set.has(user?.toLowerCase())) {
    console.log('You will need to enter a new username');
  } else {
    console.log('Username is available');
  }
});

// for (let index = 0; index < new_users.length; index++) {
//   if (current_users.includes(new_users[index]?.toLowerCase())) {
//     console.log('You will need to enter a new username');
//   } else {
//     console.log('Username is available');
//   }
// }
