const users = [
    {id: 1, name: 'amr', isActive: true, age: 27},
    {id: 2, name: 'alex', isActive: false, age: 22},
    {id: 3, name: 'momo', isActive: true, age: 20},
    {id: 4, name: 'dev', isActive: false, age: 30},
];

// all names
const names = users.map(user => user.name);
console.log(names);

// get only active users
const active_users_names = users
    .filter(user => user.isActive)
    .map(user => user.name);
console.log(active_users_names);

const sorted_users = users
    .sort((user1,user2) => (user1.age < user2.age ? 1 :-1));
