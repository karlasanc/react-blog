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

1. Install Dependencies In your terminal, navigate to the root of your project folder and run: `npm install` This will
   install all necessary dependencies.
2. Update Backend Host URL Navigate to src/api/posts.js. Change the baseURL to the backend URL you have set up (if
   different from the default).
3. Start JSON Server
4. Start React Development Server In your terminal, navigate to the root of your project folder and run: `npm install`
   This will install all necessary dependencies.

5. Update Backend Host URL:

- Navigate to root/api/posts.js
- change the baseURL to your application's backend url that you setup as the host

1. Initiate JSON server

- navigate to the "root folder" in your terminal
- launch json server instance with "npx json-server -p 3500 -w data/db.json"

4. Initiate React server

- navigate to the root folder in your terminal
- launch react server instance with "npm run dev"

## Resources

- Axios: https://www.npmjs.com/package/axios
- Easy Peasy: https://www.npmjs.com/package/easy-peasy
- React Router Dom : https://www.npmjs.com/package/react-router-dom
- Date-fns: https://www.npmjs.com/package/date-fns
- Vite: https://vite.dev/guide/
- https://www.youtube.com/watch?v=RVFAyFWO4go&t=28719s
