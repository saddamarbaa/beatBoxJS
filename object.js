// user object
const user = {
  firstName: "John",
  lastName: "Adam",
  password: (user, password) => {
    user.password = password;
    console.log(user);
  },
  "user Hobbies": ["football", "reading", "dance"],
  getUserFullName: (user) => `${user.firstName} ${user.lastName}`,
};

// console.log(user);
// console.log(user.firstName);
// console.log(user.lastName);
// console.log(user["firstName"]);
// console.log(user["lastName"]);
// user.password(user, "123");

// console.log(user["user Hobbies"]);
// console.log(user["user Hobbies"][0]);
// console.log(user["user Hobbies"][1]);
// console.log(user["user Hobbies"][2]);
// console.log(user.getUserFullName(user));

if ("firstName" in user) {
  console.log("yes first name is in user object");
} else {
  console.log("no first name is not in user object");
}

if ("middleName" in user) {
  console.log("yes first name is in user object");
} else {
  console.log("no middle name is not in user object");
}

for (let prop in user) {
  // console.log(prop);
  console.log(user[prop]);
}

// Student class
class Student {
  constructor(firstName, lastName, id, studentHobbies) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.id = id;
    this.studentHobbies = studentHobbies;
  }
  getUserFullName = () => `${this.firstName} ${this.lastName}`;
}

let stud1 = new Student("Jon", "Joid", 12, ["football", "reading"]);
let stud2 = new Student("Jolli", "Divd", 12, ["writing", "volleyball"]);

console.log(stud1);
console.log(stud1.id);
console.log(stud1.firstName);
console.log(stud1.lastName);
console.log(Student.studentHobbies);
console.log(stud2.studentHobbies[1]);
console.log(stud1.getUserFullName());
console.log(stud2.getUserFullName());
