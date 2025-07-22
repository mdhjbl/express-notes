const Validator = require('fastest-validator');
//creating an instance of the Validator class from the fastest-validator package.
const v = new Validator();

const Schema = {
    name: { type: "string", min: 3, max: 10 },
    username: { type: "string", min: 3, max: 15, pattern: /^[a-zA-Z0-9_]+$/ },
    age: { type: "number", min: 13, max: 100, optional: true },
    email: { type: "email" },
    password: { type: "string", min: 6 },
    confirmPassword: { type: "equal", field: "password" },
    $$strict: true
};

const check = v.compile(Schema);
module.exports = check;
