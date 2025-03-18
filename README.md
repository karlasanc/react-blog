# Blog using React + Vite

Single page Blog application using React + Vite.

- Utilizes **React Router** to simulate a multi-page application.
- Utilizes **Axios** to fetch data from development API using **JSON server**.
- Utilizes CSS Flexbox to design application
- Utlizes Context Hook instead of Props Drilling

## Functionalities

- Crud operations to create, read, update and delete posts from backend server.
- Responsive application that adapts to user screen (Mobile, Table, and Laptop/Desktop)

## Setup

1. Update Backend Host URL:

- Navigate to root/api/posts.js
- change the baseURL to your application's backend url that you setup as the host

2. Initiate back-end server

- navigate to the "root folder" in your terminal
- launch json server instance with "npx json-server -p 3500 -w data/db.json"

3. Initiate front-end server

- navigate to the root folder in your terminal
- launch react server instance with "npm run dev"

## Resources

- https://www.youtube.com/watch?v=RVFAyFWO4go&t=28719s
