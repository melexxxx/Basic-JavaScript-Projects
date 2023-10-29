// Function that utilizes a while loop
function whileLoopExample() {
    let count = 1;
    while (count <= 5) {
        console.log("While loop: Count is " + count);
        count++;
    }
}

// Function that utilizes a for loop
function forLoopExample() {
    for (let i = 1; i <= 5; i++) {
        console.log("For loop: i is " + i);
    }
}

// Function that utilizes an array
function arrayExample() {
    const fruits = ["Apple", "Banana", "Orange", "Mango"];
    console.log("Array Example: Fruits in the array are: " + fruits.join(", "));
}

// Creating an object using the "let" keyword
let person = {
    firstName: "John",
    lastName: "Doe",
    age: 30
};

// Function calls
whileLoopExample();
forLoopExample();
arrayExample();

// Displaying the object created with "let"
console.log("Object Example: First Name: " + person.firstName + ", Last Name: " + person.lastName + ", Age: " + person.age);
