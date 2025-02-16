// Create an Object
// Create an object person with properties: name, age, and city. Log the object to the console.

// Access Object Properties
// Given the person object, access and log the name and city properties.

// Destructuring an Object
// Destructure the name and age properties from the person object and log them.

// Nested Object Destructuring
// Create an object student with a name, age, and a nested address object containing city and country. Use destructuring to extract city and country from the address.

// Default Values in Destructuring
// Create an object product with properties name and price. Destructure name and category from the object, giving category a default value of "general".

// Destructure from Function Parameters
// Write a function displayCar that takes an object with properties brand, model, and year as a parameter and logs them using destructuring.

// Rest Operator with Objects
// Create an object book with properties title, author, year, and publisher. Use the rest operator to collect the year and publisher into a new object.

// Spread Operator with Objects
// Create two objects, user with properties name and age, and location with properties city and country. Merge them into a new object using the spread operator.

// Rest Operator with Function Arguments
// Write a function sumNumbers that takes any number of arguments using the rest operator and returns the sum of the numbers.

// Spread Operator with Arrays
// Create two arrays, numbers1 and numbers2. Use the spread operator to combine them into one array.

const person = {
    name: "Nodiko Bejanidze",
    age: 13,
    city: "Batumi"
}

console.log(person)

const { name, city } = person

console.log(city)

const student = {
    name: "Nodiko Bejanidze",
    age: 13,
    address: {
        city: "Batumi",
        country: "Georgia",
    }
}

console.log(student)

const { city: studentCity, country: studentCountry } = student.address

console.log(studentCity, studentCountry)

const product = {
    name: "Apple",
    price: 10
}

console.log(product)

const { name: productName, category = "general" } = product

console.log(productName, category)

function displayCar({ brand, model, year }) {
    console.log(`Brand: ${brand}, Model: ${model}, Year: ${year}`)
}

displayCar(person)

const book = {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    year: 1925,
    publisher: "J.B. Lippincott & Co."
}

const { year: bookYear, publisher: bookPublisher } = book

console.log(bookYear, bookPublisher)

const user = {
    name: "Nodiko Bejanidze",
    age: 13
}


function sumNumbers() {
    const args = [...arguments]
    return args.reduce((acc, val) => acc + val, 0)
}

console.log(sumNumbers(1, 2, 3, 4, 5))

const numbers1 = [1, 2, 3]
const numbers2 = [4, 5, 6]
const combinedNumbers = [...numbers1, ...numbers2]
console.log(combinedNumbers)