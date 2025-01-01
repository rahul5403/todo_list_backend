# Todo List Backend

This repository contains the backend implementation of a Todo List application built using the MongoDB, Express, Node.js. It provides RESTful APIs for user authentication, task management, and token-based authentication.

## Features
- User authentication (Sign Up, Login, Logout)
- Create, update, fetch, and delete tasks
- JWT-based authentication and authorization
- Secure password hashing using bcrypt
- Middleware to protect routes

---

## Project Directory Structure

```
rahul5403-todo_list_backend/
├── backend/
│   ├── server.js
│   ├── controller/
│   │   ├── auth_controller.js
│   │   └── task_controller.js
│   ├── routes/
│   │   ├── task_routes.js
│   │   └── auth_routes.js
│   ├── model/
│   │   ├── user_model.js
│   │   └── task_model.js
│   ├── middleware/
│   │   └── protectRoute.js
│   ├── db/
│   │   └── connectDB.js
│   └── utils/
│       └── token.js
└── package.json
```

---

## Installation

### Prerequisites
- Node.js 
- MongoDB instance

### Steps
1. Clone the repository:
   ```bash
   git clone https://github.com/rahul5403/todo_list_backend.git
   cd todo_list_backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Configure environment variables:
   - Create a `.env` file in the `backend/` directory with the following variables:
     ```env
     PORT=5000
     MONGO_URI=<your_mongo_connection_string>
     SECRET=<your_jwt_secret>
     ```

4. Start the server:
   - In development mode:
     ```bash
     npm run dev
     ```
   - In production mode:
     ```bash
     npm start
     ```

5. The server will run at `http://localhost:5000`.

---

## API Endpoints

### Authentication Routes
| Method | Endpoint     | Description         |
|--------|--------------|---------------------|
| POST   | `/user/signup` | Register a new user |
| POST   | `/user/login`  | Login an existing user |
| POST   | `/user/logout` | Logout the user (requires authentication) |

### Task Routes
| Method | Endpoint       | Description                  |
|--------|----------------|------------------------------|
| POST   | `/tasks`        | Create a new task (protected) |
| GET    | `/tasks`        | Get all tasks (protected)    |
| GET    | `/tasks/:id`    | Get a task by ID (protected) |
| PUT    | `/tasks/:id`    | Update task status (protected) |
| DELETE | `/tasks/:id`    | Delete a task (protected)    |

---

## Technologies Used

- **Node.js**: Backend runtime
- **Express**: Web framework for building RESTful APIs
- **MongoDB**: NoSQL database for storing users and tasks
- **Mongoose**: MongoDB object modeling for Node.js
- **JWT**: Secure token-based authentication
- **Bcrypt.js**: Secure password hashing
- **dotenv**: Environment variable management
- **Nodemon**: Development tool for auto-restarting the server

---

## Author
**Rahul Meshram**  
[GitHub](https://github.com/rahul5403)

