# Simple MERN User-CRUD Application

This is a simple user-CRUD application built using the MERN stack, incorporating some of the best industry practices. It uses Tailwind CSS for styling and several other useful libraries.

## Requirements

- Node.js (latest version)
- npm (comes with Node.js)
- MongoDB Atlas account
- VS Code or any other code editor
- Internet connection
- Git

## Setup Instructions

### 1. Clone the Repository

First, clone the repository to your local machine:

```sh
git clone <repository-url>
cd <repository-folder>
```

### 2. Setting Up the Client

Navigate to the client folder and install the necessary dependencies:

```sh
cd client
npm install
npm run dev
```

### 3. Setting Up the Server

Navigate to the server folder and install the necessary dependencies:

```sh
cd server
npm install
npm run dev
```

## Environment variables

Set the environment variables:

- PORT (the port on which the server will run)
- MONGODB_URL (your MongoDB Atlas Cluster URL)
- You can create a .env file in the server folder to store these variables:

```env
PORT=your_port_number
MONGODB_URL=your_mongodb_atlas_cluster_url
```

## Project Structure

The project is divided into two main folders:

- client: Contains the frontend code.
- server: Contains the backend code.

  ### Libraries and Tools Used

#### Frontend:

- React.js
- Tailwind CSS
- Axios
- React Router
- React Icons
- React Hot Toast

#### Backend:

- Express.js
- Mongoose
- dotenv
- Cors

#### Features

Create, Read, Update, and Delete (CRUD) operations for users
Responsive design using Tailwind CSS
Modern React hooks and functional components
Contributing
If you want to contribute to this project, feel free to open a pull request. Please ensure your changes adhere to the project's coding standards and guidelines.

```
License:
This project is licensed under the MIT License.
```
