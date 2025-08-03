# Express.js Basics

## Installation

To start working with Express, install it using the following command:

```bash
npm i express
```

---

## Route Parameters

We call the part of the link after the constant that changes for each page a "route parameter".

Example:
`/users/:id` → `:id` is the route parameter.

You can access it using:

```js
req.params.id
```

To receive multiple route parameters:

```js
app.get('/users/:userId/books/:bookId', (req, res) => {
  // Access via req.params.userId and req.params.bookId
});
```

---

## Types of Sending Response

- `res.send()`
- `res.end()`
- `res.json()`

Without Express, you need to manually set the `Content-Type`.  
With Express, this is handled automatically.

**Differences:**
- `.send()` is the most commonly used.
- `.end()` just ends the response and is rarely used.
- `.json()` is used to send responses in JSON format.

---

## CRUD Operations

- Create → `POST`
- Read → `GET`
- Update → `PUT`
- Delete → `DELETE`

---

## Receiving Request Body

To receive the request body in Express, use:

```js
req.body
```

But without middleware, `req.body` will be `undefined`.

### Use one of the following middlewares:

```js
app.use(express.json()) // for JSON data
app.use(express.urlencoded()) // for URL-encoded data
```

To access a specific value like `id`:

```js
req.body.id
```

---

## Body-Parser Package

In older versions of Express, `body-parser` was used to handle request bodies.

Now, starting from Express 4.16+, you can just use:

```js
express.json()
express.urlencoded()
```

So, `body-parser` is no longer necessary unless you have specific needs.

---

## Connect to Database with Mongoose

To use MongoDB with Express, install Mongoose:

```bash
npm i mongoose
```

Then follow these steps:

1. Create a folder called `configs`.
2. Inside it, create a file `db.js`.
3. Write the database connection code in `db.js`.
4. In your main file (e.g., `app.js`), require `db.js` to connect to the database.

---

## Creating a Model

Each MongoDB collection should have its own model.

Steps:

1. Create a folder named `models`.
2. Inside it, create a file for each collection.
3. Define a schema for each model using Mongoose.

Example:

```js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: String,
  email: String
});

module.exports = mongoose.model('User', UserSchema);
```

---

## Request Body Validation with fastest-validator

You can validate the request body using the `fastest-validator` package.

Steps:

1. Create a folder named `validator`.
2. Inside it, create a `.js` file for each object you want to validate.
3. Write validation logic using fastest-validator.

Before using an ID to query the database, always validate if it’s a valid MongoDB ObjectId to prevent errors or crashes.

---

## What is Middleware?

Middleware is a function that runs between the request and the response.

It can:

- Modify the request/response
- End the request
- Pass control to the next middleware

Think of it as a pipeline through which each HTTP request flows.

---

## Global vs Local Middleware

- **Global Middleware** → applies to all routes in the app
- **Local Middleware** → applies only to specific routes

---

## One JavaScript Note

You can add properties to an object even after it's created.

```js
let obj = { id: 1 };
console.log(obj.username); // undefined
obj.username = "alex123";
console.log(obj.username); // "alex123"
```

---

## Types of Middleware

1. Application-level middleware  
2. Router-level middleware  
3. Error-handling middleware  
4. Built-in middleware  
5. Third-party middleware

[Express Middleware Docs](https://expressjs.com/en/guide/using-middleware.html)

## Working with Morgan Package

Morgan is a third-party middleware package used as a logger in Express applications.  
It helps log incoming HTTP requests in different formats.

### Installation

```bash
npm i morgan
```

### Usage

After installing, you can use it in your Express app like this:

```js
const morgan = require('morgan');
app.use(morgan('dev'));
```

### Available Logging Formats

Morgan provides several predefined formats:

- `dev` – concise output colored by response status
- `tiny` – minimal output
- `short` – short output including response time
- `common` – standard Apache common log output
- `combined` – standard Apache combined log output (more detailed)

You can choose the one that fits your needs.


## Query Parameters

Query parameters are used to send key-value data through the URL, usually for filtering, sorting, or pagination.

### Example

A URL with query parameters:

```
/users?age=25&country=US
```

In Express, you can access query parameters using `req.query`:

```js
app.get('/users', (req, res) => {
  console.log(req.query.age);      // 25
  console.log(req.query.country);  // US
});
```

### Notes

- Query parameters are always strings.
- They are optional.
- Multiple parameters can be passed using `&` between them.

## omit-empty Middleware

This middleware automatically removes any empty properties from the request body (or any specified object). It helps keep your data clean by omitting:

- Empty strings (`""`)
- `null` values
- `undefined` values

### Features

- Removes keys with empty strings (`""`)
- Removes keys with `null` or `undefined`
- Can be customized to omit other falsy or empty values if needed
