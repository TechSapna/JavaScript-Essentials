const familyGuests = ['Alice', 'Bob', 'Charlie'];
const friendGuests = ['Dave', 'Eva', 'Frank'];

const allGuests = [...familyGuests, ...friendGuests];
console.log(allGuests); 
// Output: ['Alice', 'Bob', 'Charlie', 'Dave', 'Eva', 'Frank']


const temperatures = [72, 88, 95, 79, 85];
const highestTemp = Math.max(...temperatures);
console.log(highestTemp); 
// Output: 95


const userInfo = { username: 'techsapna', email: 'user@example.com' };
const userSettings = { theme: 'dark', notifications: true };

const userProfile = { ...userInfo, ...userSettings };
console.log(userProfile); 
// Output: { username: 'techsapna', email: 'user@example.com', theme: 'dark', notifications: true }


function calculateTotal(...prices) {
    return prices.reduce((total, price) => total + price, 0);
}

console.log(calculateTotal(10.99, 5.99, 3.50)); 
// Output: 20.48


const user = { username: 'sapna', age: 28, location: 'India', job: 'Developer', skills: ['JavaScript', 'React'] };

const { username, job, ...otherDetails } = user;
console.log(username, job); // Output: sapna Developer
console.log(otherDetails); 
// Output: { age: 28, location: 'India', skills: ['JavaScript', 'React'] }


const playerStats = { health: 100, mana: 50, score: 200, level: 3 };

const updatedStats = { ...playerStats, score: 300 };
console.log(updatedStats); 
// Output: { health: 100, mana: 50, score: 300, level: 3 }
