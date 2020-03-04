//object to json and json to object
const user = {id: 12, name: "Rahul"};
const userJason = JSON.stringify(user);
console.log(userJason);

const userFromJason = JSON.parse(userJason);
console.log(userFromJason);
