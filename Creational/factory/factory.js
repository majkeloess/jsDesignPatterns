const createUserClassic = ({ firstName, lastName, email }) => ({
  firstName,
  lastName,
  email,
  fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
});

const user1 = createUserClassic({
  firstName: "John",
  lastName: "Doe",
  email: "john@doe.com"
});

const user2 = createUserClassic({
  firstName: "Jane",
  lastName: "Doe",
  email: "jane@doe.com"
});

console.log(user1);
console.log(user2);




// However, in many cases it may be more memory efficient to create new instances instead of new objects each time.

class User {
  constructor(firstName, lastName, email) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
  }

  fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

const user4 = new User({
  firstName: "John",
  lastName: "Doe",
  email: "john@doe.com",
});

const user5 = new User({
  firstName: "Jane",
  lastName: "Doe",
  email: "jane@doe.com",
});