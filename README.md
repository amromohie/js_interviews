# 📚 JavaScript Interview Prep Guide – Amr’s Edition

This guide compiles essential JavaScript concepts and practical examples to help with interview preparation. It focuses on both theoretical knowledge and applied problem-solving, particularly useful for front-end engineers expanding into full-stack roles.

## ✨ Topics Covered

### 💡 Fundamentals
- Hoisting, Scope & Closures
- Prototypes and Inheritance
- Event Loop, Call Stack, Microtasks vs Macrotasks

### 🚀 ES6+ Features
- Arrow Functions, `let/const`, Template Literals
- Destructuring, Spread/Rest operators
- Promises, `async/await`

### 🎨 Front-End Insights
- DOM Manipulation and Event Handling
- Angular-specific tips:
  - Directive creation for input formatting
  - Form validation patterns
- SCSS mastery with CSS variables and mixins

### 🛠️ Dynamic Functionality
- Input masking and real-time formatting
- Theme switching using JS and CSS variables
- Debugging React toolchain mismatches

### 🧪 Back-End Concepts (for full-stack transition)
- Node.js basics: `Express.js`, Routing
- Java foundations: OOP, Collections, Annotations
- Spring Boot essentials: Dependency Injection, REST APIs

### 🧠 Problem-Solving & Algorithms
- Common coding patterns: recursion, two pointers
- Specialized techniques: backtracking
- Interview-style challenges with examples

## 👨‍💻 Study Tips
- Practice with real-world bugs from Angular and React projects.
- Review open-source contributions for collaborative coding experience.
- Focus on JavaScript's quirks and edge cases during mock interviews.

---

[
  {
    "question": "What is the result of `typeof null` in JavaScript?",
    "options": ["object", "null", "undefined", "boolean"],
    "answer": "object"
  },
  {
    "question": "Which method is used to convert JSON to a JS object?",
    "options": ["JSON.parse()", "JSON.stringify()", "Object.fromJSON()", "parseJSON()"],
    "answer": "JSON.parse()"
  },
  {
    "question": "What will be logged? \n```js\nconsole.log(1 + '1');```",
    "options": ["2", "'2'", "'11'", "NaN"],
    "answer": "'11'"
  },
  {
    "question": "Which variable declaration is block scoped?",
    "options": ["var", "let", "const", "both let and const"],
    "answer": "both let and const"
  },
  {
    "question": "Which of the following is NOT a JavaScript data type?",
    "options": ["Boolean", "Undefined", "Float", "Symbol"],
    "answer": "Float"
  },
  {
    "question": "What will be the output? \n```js\nconsole.log(typeof NaN);```",
    "options": ["number", "NaN", "undefined", "object"],
    "answer": "number"
  },
  {
    "question": "Which of the following is true about arrow functions?",
    "options": [
      "They have their own 'this' context",
      "They inherit 'this' from their enclosing scope",
      "They cannot be used as object methods",
      "They support the arguments object"
    ],
    "answer": "They inherit 'this' from their enclosing scope"
  },
  {
    "question": "Which statement is true about JavaScript hoisting?",
    "options": [
      "Only variables are hoisted",
      "Only functions are hoisted",
      "Both variables and functions are hoisted",
      "Hoisting doesn’t exist in JavaScript"
    ],
    "answer": "Both variables and functions are hoisted"
  }
]
