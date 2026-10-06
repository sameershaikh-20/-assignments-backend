let userName = "Rahul";
let userAge = 21;
let isPremiumUser = true;
let userBio = null;
let userId = Symbol("id");

let userAddress = {
  city: "Mumbai",
  country: "India"
};

let favoriteItems = ["Laptop", "Book", "Headphones", "Watch"];

function getUserGreeting() {
  return "Hello " + userName + ", welcome back!";
}

console.log(userName);
console.log(userAddress.city);
console.log(favoriteItems[2]);
console.log(getUserGreeting());
