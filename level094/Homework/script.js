// 1. **Filter Prime Numbers**
//   - Create an array of numbers and use `filter()` to return only the prime numbers.

// 2. **Map to Object Conversion**
//    - Given an array of objects (e.g., users with `id` and `name`), use `map()` to create an array of strings that contains only the names.

// 4. **Filter Objects by Property**
//    - Given an array of objects representing products (each having a `name` and `price`), use `filter()` to return products that are cheaper than a certain value.

// 5. **Map Complex Transformations**
//   - Create an array of objects representing books (with `title` and `author`). Use `map()` to return an array of strings in the format: `"Title by Author"`.

// 6. **Filter Numbers Based on Multiple Conditions**
//    - Given an array of numbers, use `filter()` to return numbers that are both greater than 10 and divisible by 3.

// 7. **Modify Array of Objects (map)**
//   - Given an array of objects representing users with a `name` and `age`, use `map()` to return a new array where all users are considered adults (i.e., add a new `isAdult` property based on their age).

// 8. **Chaining map and filter**
//   - Create an array of numbers. First, use `filter()` to return numbers greater than 50. Then, use `map()` to halve those numbers.

// 9. **Log Word Frequencies (forEach)**
//  - Create an array of words. Use `forEach()` to create an object that tracks how many times each word appears in the array.

// 10. **Filter Objects by Nested Property**
//   - Given an array of objects representing cars (with nested objects for `brand` and `model`), use `filter()` to return only cars of a specific brand.

// ---

// ### Project Idea: **Shopping Cart with Discounts**

// **Description:** Build a simple shopping cart where users can add, remove, and update items. Each item has a name, price, and quantity. Use DOM manipulation, arrow functions, and methods like `map()`, `filter()`, and `forEach()` to perform the following:

// - **Features**:
//  1. Display the items in the cart dynamically on the page.
//  2. Add new items to the cart with a form (name, price, quantity).
//  3. Update the quantity of items already in the cart.
//  4. Remove items from the cart.
//  5. Show the total price of all items, and apply a discount if the total is above a certain amount.
//  6. Filter items based on price range or quantity.
//  7. Use `forEach()` to iterate through the cart and display each item's name, price, and quantity.
//  8. Use `map()` to generate a new list of items with a discounted price if a certain condition is met.
//  9. Use `filter()` to remove items that are no longer needed or meet certain criteria (e.g., quantity is zero).
  
// This project allows you to work with dynamic UI updates, event listeners, and array methods!



// 1. Filter Prime Numbers

const primeNumbers = numArr.filter(num => {
    if (num <= 1) return false;
    for (let i = 2; i < num; i++) {
        if (num % i === 0) return false;
    }
    return true;
});

// 2. Map to Object Conversion
const userNames = users.map(user => user.name);

// 4. Filter Objects by Property

const cheaperProducts = products.filter(product => product.price < 10);

// 5. Map Complex Transformations

const bookTitles = books.map(book => `${book.title} by ${book.author}`);

// 6. Filter Numbers Based on Multiple Conditions

const divisibleByThreeNumbers = numbers.filter(num => num > 10 && num % 3 === 0);

// 7. Modify Array of Objects (map)

const adultUsers = users.map(user => {
    user.isAdult = user.age >= 18;
    return user;
});

// 8. Chaining map and filter

const halvedNumbers = numbers.filter(num => num > 50).map(num => num / 2);

// 9. Log Word Frequencies (forEach)

const wordFrequency = {};
words.forEach(word => {
    if (wordFrequency[word]) {
        wordFrequency[word]++;
    } else {
        wordFrequency[word] = 1;
    }
});

// 10. Filter Objects by Nested Property

const specificBrandCars = cars.filter(car => car.brand === 'specificBrand');

// ვუყურე ჩანაწერსაც