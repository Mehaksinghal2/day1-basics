# Day 1–4 – Basics to API Development

This project was created as part of my Day 1, Day 2, Day 3, and Day 4 learning tasks.

## Day 1 – HTML & CSS

### What I Learned

- Basic VS Code workflow
- Basic terminal commands
- HTML structure
- CSS basics
- Git basics

### Project

Created a simple static webpage using HTML and CSS.

---

## Day 2 – JavaScript & Git

### What I Learned

- JavaScript basics
- Variables and functions
- Arrays and objects
- DOM manipulation
- Event handling
- Git branches
- Git commits
- Pull Requests

### Project

Added JavaScript interaction to the Day 1 webpage and created a separate Git branch for the changes.

The changes were committed and a Pull Request was created to merge the Day 2 work into the main branch.

---

## Day 3 – React Basics

### What I Learned

- React components
- JSX
- Props
- State
- Event handling
- Lists
- Conditional rendering
- Forms
- Basic component structure

### Project

Created a React dashboard using reusable components such as Header, Card, TaskList, and TaskForm.

The dashboard displays skills and allows users to add new skills using a form.

---

## Day 4 – Node.js & TypeScript API

### What I Learned

- Node.js basics
- Express.js
- TypeScript interfaces
- REST API basics
- JSON request and response
- GET and POST requests
- API routes
- Input validation
- Simple error responses
- API testing using Thunder Client

### Project

Created a simple REST API using Node.js, Express.js, and TypeScript.

The API includes the following endpoints:

- `GET /health` – Checks whether the API is running
- `GET /items` – Returns the list of items
- `POST /items` – Adds a new item

The API uses a TypeScript `Item` interface and validates the data received through POST requests.

### How to Run

```bash
npm install
npx tsc
node dist/server.js
```

The API runs locally on:

```text
http://localhost:3000
```

---

## Technologies Used

- HTML
- CSS
- JavaScript
- React
- Node.js
- Express.js
- TypeScript
- Git
- GitHub
- VS Code
- Thunder Client