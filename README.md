# Real-Time Chat Application - Backend

A real-time chat application backend built with Node.js, TypeScript, and Socket.IO. This project serves as the engine for handling WebSocket connections, managing chat rooms, and broadcasting messages.

## ✨ Features

-   Real-time messaging using WebSockets
-   User authentication and session management
-   Ability to create and join different chat rooms
-   Message history persistence
-   "User is typing..." indicators

## 🛠️ Tech Stack

-   **Backend:** Node.js, Express.js
-   **Real-time Engine:** Socket.IO
-   **Language:** TypeScript
-   **Database:** MongoDB (or PostgreSQL)
-   **Authentication:** JWT (JSON Web Tokens)

## 🚀 Getting Started

### Prerequisites

-   Node.js (v18 or later)
-   npm
-   A running instance of MongoDB (or your chosen database)

### Installation & Setup

1.  Clone the repository:
    ```bash
    git clone [https://github.com/janith-codes/chat-app-backend.git](https://github.com/janith-codes/chat-app-backend.git)
    ```
2.  Navigate into the project directory:
    ```bash
    cd chat-app-backend
    ```
3.  Install the dependencies:
    ```bash
    npm install
    ```
4.  Set up your environment variables by creating a `.env` file. A `.env.example` file should be provided.
    ```
    PORT=3001
    DATABASE_URL=your_database_connection_string
    ```
5.  Start the development server:
    ```bash
    npm run dev
    ```

The server will be running on `http://localhost:3001`.
