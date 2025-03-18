# Blog using React + Vite

This is a Single Page Blog Application built using React and Vite. It simulates a full-stack blog experience by
utilizing JSON Server for backend REST API during development, React Router for page navigation, and Easy Peasy for
state management with Redux.

## Key Features

- CRUD Operations: Create, Read, Update, and Delete posts from the backend server.
- Routing: Navigate between different pages using React Router.
- State Management: Manage application state with Easy Peasy (a Redux alternative).
- Responsive Design: Adapts to various screen sizes (Mobile, Tablet, Laptop/Desktop).
- Styled with Flexbox: Uses CSS Flexbox for layout design.

## Tech Stack

- **React**: JavaScript library for building user interfaces.
- **Vite**: Next-generation build tool for fast development and production builds.
- **Axios**: Promise-based HTTP client for making requests to the API.
- **Easy Peasy**: State management library using Redux under the hood.
- **JSON Server**: Fake REST API for development.
- **React Router**: For page navigation.

## Functionalities

- Create, Read, Update, Delete (CRUD): Full CRUD functionality for posts.
- Responsive UI: Mobile-first design that adjusts seamlessly across different devices.

## Setup Instructions
### 1. Install Dependencies
In your terminal, navigate to the root of your project folder and run:
```bash
npm install
```
This willinstall all necessary dependencies.

### 2. Update Backend Host URL 
* Navigate to ```src/api/posts.js```.
* Change the ```baseURL``` to the backend URL you have set up (if
   different from the default).
```bash
axios.defaults.baseURL = 'http://localhost:3500';
```

### 3. Start JSON Server
* In your terminal, navigate to the project root folder
* Start the JSON server to simulate a backend API
```bash
npx json-server -p 3500 -w data/db.json
```
This will start the server on port ```3500``` with the db.json file as the data source

### 4. Start React Development Server 
* Navigate to the root folder in your terminal
* Start the React development server
```bash
npm install
```
This will start the React development server and open the application in your default browser. 
## Resources

- [Axios](https://www.npmjs.com/package/axios): Promised-based HTTP client for making requests. 
- [Easy Peasy](https://www.npmjs.com/package/easy-peasy): State management library using Redux under the hood.
- [React Router Dom](https://www.npmjs.com/package/react-router-dom): Routing library for React.
- [Date-fns](https://www.npmjs.com/package/date-fns): JavaScript library for working with dates.
- [Vite](https://vite.dev/guide/): Next-generation build tool.
- [Youtube Tutorial](https://www.youtube.com/watch?v=RVFAyFWO4go&t=28719s): Dave Node tutorial

