// Task 1
function userProfile(name) {
  console.log(`Hello, ${name}!`);
}
userProfile("Vasanth");

// Task 2
const double = (num) => num * 2;
console.log(double(5));

// Task 3
setTimeout(function() {
  console.log("This message is delayed by 2 seconds");
}, 2000);

// Task 4
function getUserData(callback) {
  setTimeout(() => {
    callback("Call Back Function");
  }, 3000);
}
getUserData(function(message) {
  console.log(message);
});