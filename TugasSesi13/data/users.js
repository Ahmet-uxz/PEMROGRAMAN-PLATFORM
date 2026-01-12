const bcrypt = require("bcryptjs");

module.exports = [
  {
    id: 1,
    email: "admin@email.com",
    password: bcrypt.hashSync("123456", 10),
    role: "admin",
  },
  {
    id: 2,
    email: "latip@email.com",
    password: bcrypt.hashSync("123456", 10),
    role: "user",
  },
  {
    id: 3,
    email: "user@email.com",
    password: bcrypt.hashSync("123456", 10),
    role: "user",
  },
];
