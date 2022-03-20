"use strict";

let users = {};
users.name = "John";
users.surname = "Smith";
users.name = "Pete";
delete users.name;
console.log(users);

const user = {
    name: "John"
};
user.name = "Pete";
console.log(user);

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
};
let sum = 0;
for (let key in salaries) {
    sum += salaries[key];
}
console.log(sum);
alert(sum);