# dummy-user-generator

[![npm version](https://img.shields.io/npm/v/dummy-user-generator.svg)](https://www.npmjs.com/package/dummy-user-generator)
[![GitHub issues](https://img.shields.io/github/issues/Anmol-Gup/dummy-user-generator)](https://github.com/Anmol-Gup/dummy-user-generator/issues)
[![GitHub license](https://img.shields.io/github/license/Anmol-Gup/dummy-user-generator)](https://github.com/Anmol-Gup/dummy-user-generator/blob/main/LICENSE)

A simple npm package to generate fake user data for testing and development purposes.

## Installation

```bash
npm install dummy-user-generator
```

## Usage

```
import {GetUsers, GetUserById} from 'dummy-user-generator'

// Get a list of dummy users
GetUsers().then(users => {
    console.log(users);
});

// Get a specific dummy user by ID
GetUserById(3).then(user => {
    console.log(user);
});
```
## Features
- Generates random dummy user data.
- Provides functions to retrieve a list of users or a specific user by ID.
- Easy to integrate into your testing or development workflow.

## API

- GetUsers()
Returns a Promise that resolves to an array of dummy users.

- GetUserById(id)
id: The ID of the user to retrieve.
Returns a Promise that resolves to a specific dummy user.

## License
This project is licensed under the ISC License.

## Author
Surya Prakash Gupta

## Acknowledgments
Special thanks to [dummyjson.com](https://dummyjson.com/users) for providing a dummy API for testing purposes.

## Links
- [GitHub Repository](https://github.com/Anmol-Gup/dummy-user-generator)
- [NPM Package](https://www.npmjs.com/package/dummy-user-generator)