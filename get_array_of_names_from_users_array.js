const users = [
    {id: 1, name: 'amr', isActive: true},
    {id: 2, name: 'alex', isActive: false},
    {id: 3, name: 'momo', isActive: true},
    {id: 4, name: 'dev', isActive: false},
];

const names = users.map(user => user.name);
console.log(names);
