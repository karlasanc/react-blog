# Blog using React + Vite

This is a **Single Page Blog Application** built using **React** and **Vite**. It simulates a full-stack blog experience by utilizing **JSON Server** for backend REST API during development, **React Router** for page navigation, and **Easy Peasy** for state management with Redux.

## Key Features

- **CRUD Operations**: Create, Read, Update, and Delete blog posts.
- **Routing**: Navigate between pages using React Router.
- **State Management**: Manage global state efficiently with Easy Peasy.
- **Responsive Design**: Mobile-first design, adapting seamlessly across devices.
- **Flexbox Layout**: Styled using CSS Flexbox for a modern UI.

## Tech Stack

- **React**: JavaScript library for building user interfaces.
- **Vite**: Next-generation build tool for fast development and production builds.
- **Axios**: Promise-based HTTP client for making requests to the API.
- **Easy Peasy**: State management library using Redux under the hood.
- **JSON Server**: Fake REST API for development.
- **React Router**: For page navigation.
- **Date-fns**: Library for date formatting.

## Installation & Setup

## Setup Instructions

Follow these steps to set up the project on your local machine:

### 1. Install Dependecies

```sh
npm install
```

### 2. Update Backend Host URL

* Navigate to `src/api/posts.js`.
* Update the `baseURL` to match your backend server's URL (if different from the default).

### 3. Start JSON Server (Mock API)

* Open a terminal and navigate to the project root.
* Run the following command to start the **JSON server**:

```sh
npx json-server -p 3500 -w data/db.json
```

### 4. Start the React Development Server

* Open a terminal and navigate to the project root.
* Start the **React App** with:

```sh
npm run dev
```

## Resources

- [Axios](https://www.npmjs.com/package/axios): Promise-based HTTP client.
- [Easy Peasy](https://www.npmjs.com/package/easy-peasy): Simple state management.
- [React Router Dom](https://www.npmjs.com/package/react-router-dom): Client-side routing.
- [Date-fns](https://www.npmjs.com/package/date-fns): Date utility library.
- [Vite](https://vite.dev/guide/)
- [Youtube Tutorial](https://www.youtube.com/watch?v=RVFAyFWO4go&t=28719s)