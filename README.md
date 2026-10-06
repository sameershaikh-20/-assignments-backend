# backend-assignments

College backend Node.js and JavaScript assignments repository.

## Contents
- **Assignment 1**: Shopping cart with discount and tax calculations (`assignment1.js`)
- **Assignment 2**: Primitive & non-primitive data types and user greeting (`assignment2.js`)
- **Assignment 3**: Library management system (`assignment3.js`)
- **Assignment 4**: Multiplication table with for loop (`assignment4.js`)
- **Assignment 5**: ATM withdrawal simulation with while loop & break (`assignment5.js`)
- **Assignment 6**: First even number with do-while & continue (`assignment6.js`)
- **Assignment 7**: Day of week using Date and switch statement (`assignment7.js`)
- **Assignment 8**: College grading system (`assignment8.js`)
- **Assignment 9**: JSON payload validation with custom local module (`validateUser.js`, `assignment9.js`)
- **Assignment 10**: RTO student vehicle registration system with file persistence (`assignment10.js`, `rto_data.json`)
- **Assignment 11**: Student registration HTTP server with JSON file appending (`assignment11.js`, `students.json`)
- **Major Assignment 1**: RailConnect Live Ops Dashboard for Train 12951 (`major-assignment-1/`)
- **Major Assignment 2**: Interactive E-Commerce Product Card with DOM events (`major-assignment-2/`)
- **Major Assignment 3**: User Registration & Authentication API using Express.js (`major-assignment-3/`)

## Major assignment notes

### Major Assignment 1

The RailConnect dashboard works with the Train 12951 booking data. It uses arrow functions and JavaScript array methods, does not use `for` or `while` loops, and prints the completed dashboard with `console.log()`. The dashboard includes booking and occupancy counts, revenue totals split by coach class and booking status, boarding counts by station, confirmed passengers under 12 or at least 60, and a waitlist clearance plan ordered by PNR.

### Major Assignment 2

The product card responds to clicks, double-clicks, mouseover and mouseout. A click demonstrates `event.target` and `event.currentTarget`; the buttons add the product to the cart, add it to the wishlist, and ask before removing the card. The activity log is shown on the page and in the browser console.

### Major Assignment 3

The API provides signup, login, a list of users, and lookup by ID. Signup checks the email format, prevents duplicate email addresses, and requires a password with at least eight characters, one uppercase letter, one lowercase letter, one digit, and one special character. User responses do not include passwords.
