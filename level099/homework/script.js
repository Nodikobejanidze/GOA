// Create a Class with Public Properties
// Define a Car class with public properties make and model. Create an instance and access these properties.

// Use Private Properties
// Define a BankAccount class where balance is a private property. Implement a public method to deposit and withdraw money from the account.

// Static Methods and Properties
// Create a MathOperations class with a static method add() that adds two numbers. Also, define a static property PI representing the value of Pi.

// Use Getters and Setters
// Define a Rectangle class with properties width and height. Use a getter to calculate and return the area of the rectangle. Also, include a setter that ensures width and height are always positive numbers.

// Private Methods
// Create a User class where a private method validatePassword() checks the strength of the password. The method should only be used internally when setting a password.

// Private Properties with Getters and Setters
// Define a Book class where the title is public, but the number of pages is private. Implement getters and setters to access and modify the number of pages.

// Static Method for Instance Counting
// Create a Player class where each time an instance is created, a static method getPlayerCount() keeps track of how many players have been created.

// Class Inheritance with Private Properties
// Create a Vehicle class with private properties like speed. Then, create a Bike subclass that can access public methods to modify or retrieve the speed.

// Static Method for Comparison
// Define a Student class with a static method compareGrades(student1, student2) that compares the grades of two student instances.

// Create a Class with Public Properties

class Car {
    constructor(make, model) {
        this.make = make;
        this.model = model;
    }
}

const car = new Car("Toyota", "Camry");

console.log(car.make); 

// Use Private Properties

class BankAccount {
    constructor(balance) {
        this._balance = balance;
    }

    deposit(amount) {
        if (amount > 0) {
            this._balance += amount;
            console.log(`Deposited ${amount}, new balance: ${this._balance}`);
        } else {
            console.log("Invalid deposit amount");
        }
    }

    withdraw(amount) {
        if (amount > 0 && amount <= this._balance) {
            this._balance -= amount;
            console.log(`Withdrew ${amount}, new balance: ${this._balance}`);
        } else {
            console.log("Invalid withdrawal amount or insufficient funds");
        }
    }
}

const account = new BankAccount(1000);

account.deposit(500);

account.withdraw(200);

// Static Methods and Properties

class MathOperations {
    static add(a, b) {
        return a + b;
    }

    static get PI() {
        return 3.14;
    }
}

console.log(MathOperations.add(5, 3));

console.log(MathOperations.PI);

// Use Getters and Setters

class Rectangle {
    constructor(width, height) {
        this._width = width;
        this._height = height;
    }
}



class User {
    constructor(username, password) {
        this._username = username;
        this._password = this.validatePassword(password);
    }
}



class Password {
    static get MIN_LENGTH() {
        return 8;
    }
}
