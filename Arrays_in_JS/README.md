# 📘 Day_6 Arrays in JavaScript

Today, I dove into one of the most fundamental and powerful structures in JavaScript — **Arrays**. I explored various ways to create arrays, manipulate them using built-in methods, and merge or flatten them when working with complex data structures.

---

## ✅ Topics Covered

### 🔢 Creating Arrays

- Arrays can be created using literal syntax:  
  `const arr = [1, 2, 3];`

- Or using the Array constructor:  
  `const arr = new Array(1, 2, 3);`

---

### 🧰 Array Methods

#### ➕ Adding and Removing Elements
- `.push()` – Adds elements to the end.
- `.pop()` – Removes the last element.
- `.unshift()` – Adds elements to the beginning.
- `.shift()` – Removes the first element.

#### 🔍 Searching and Indexing
- `.includes(value)` – Checks if a value exists in the array.
- `.indexOf(value)` – Returns the index of a value (or -1 if not found).

#### 🔗 Joining Elements
- `.join()` – Converts the array to a string by joining elements with a delimiter.

---

### ✂️ Slice vs Splice

- `.slice(start, end)`  
  Returns a **shallow copy** of a portion of the array (non-mutating).

- `.splice(start, count)`  
  **Removes or replaces** elements in the array (mutating).

---

### 🦸‍♂️ Array Merging

- **Using `.concat()`** – Merges two or more arrays into a new array.
- **Using spread operator (`...`)** – A modern and cleaner way to merge arrays.

---

### 🧩 Working with Nested Arrays

- `.flat(depth)` – Flattens nested arrays into a single-level array.  
  Passing `Infinity` as depth completely flattens all nested levels.

---

### 🧪 Array Utility Methods

- `Array.isArray()` – Checks if a variable is an array.
- `Array.from()` – Converts iterable or array-like objects into arrays.
  - Note: When used with objects like `{ name: "Gaurav" }`, it returns an empty array unless specified how to transform object keys/values.
- `Array.of()` – Creates a new array from a set of arguments, regardless of their number or type.

---

## 💡 Key Takeaways

- Arrays are flexible and powerful structures in JS for holding lists of data.
- There are many built-in methods to manipulate arrays — understanding **which methods mutate** and **which return new arrays** is crucial.
- Spread syntax (`...`) and `Array.from()` offer modern and efficient ways to work with array-like structures.
- Knowing when to use `.slice()` vs `.splice()` helps maintain clean, bug-free code.

---

📂 [Back to Main Repo](../README.md)