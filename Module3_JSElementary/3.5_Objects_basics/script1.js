let user = {};
user.name = "John";
user.surname = "Smith";
console.log(user.name);
console.log(user.surname);
user.name = "Pete";
console.log(user.name);
delete user.name;
console.log(user.name);