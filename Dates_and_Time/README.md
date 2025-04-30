# 📅 Day_5 – JavaScript Dates & Time

Today, I explored how JavaScript handles **dates and time** using the built-in `Date` object. I learned how to create date instances, format them, extract components, and work with timestamps — a critical aspect when dealing with real-world time-sensitive applications.

---

## ✅ Topics Covered

### 🧱 Creating Dates

- Created a date using `new Date()` which returns the current date and time.
- Constructed specific dates using:
  - `new Date(year, monthIndex, day, hour, minute)`
  - `new Date("MM-DD-YYYY")` for readable custom dates.

### 🕰️ Formatting Dates

Explored various methods to convert a date into human-readable formats:

- `.toString()` – Returns the full date and time string.
- `.toDateString()` – Returns only the date portion in readable form.
- `.toLocaleString()` – Converts to a locale-aware date and time.
- `.toLocaleDateString()` – Returns only the date portion, locale-aware.
- `.toJSON()` – Converts the date to a JSON-compatible string.

---

### 🧪 Understanding Types

- The type of a `Date` object is `object`.

---

### ⏳ Working with Timestamps

- Used `Date.now()` to get the current time in **milliseconds** since Unix epoch (Jan 1, 1970).
- Used `.getTime()` to get the timestamp of a custom-created date.
- Converted milliseconds to seconds using `Math.floor(Date.now() / 1000)`.

---

### 📆 Extracting Components from Date

- `.getMonth()` – Returns the month (0-indexed, so January = 0).
- `.getDay()` – Returns the day of the week (0 for Sunday, 6 for Saturday).
- Used `.toLocaleString()` with options to extract the full weekday name using:
  ```js
  newDate.toLocaleString('default', { weekday: "long" })

---

📂 [Back to Main Repo](../README.md)