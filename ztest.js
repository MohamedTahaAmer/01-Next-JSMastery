// const clientTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
// console.log(clientTimeZone); // Output: "America/New_York" (example)

// const event = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));

// // British English uses day-month-year order and 24-hour time without AM/PM
// console.log(event.toLocaleString('en-GB', { timeZone: 'UTC' }));

// 'Error checking if user exists: ',
// 'User validation failed: username: Username invalid, it should contain 8-20 alphanumeric letters and be unique!'


import { v4 as uuidv4 } from 'uuid';
console.log(uuidv4())
console.log(uuidv4())
console.log(uuidv4())