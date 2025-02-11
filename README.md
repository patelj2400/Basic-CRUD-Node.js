# Basic-CRUD-Node.js
Basic CRUD operations in Node.js

# Node.js JSON CRUD Application

This is a simple Node.js application that performs CRUD (Create, Read, Update, Delete) operations on a JSON file. It includes a frontend with Material Design for interacting with the backend API.

## Features

- Read all items from the JSON file
- Add a new item
- Update an existing item
- Delete an item
- Material Design-based frontend

## Technologies Used

- Node.js
- Express.js
- fs (File System module)
- CORS
- dotenv
- Materialize CSS (Frontend UI)

## Installation

### Clone the repository:
```sh
git clone https://github.com/your-repo/node-json-crud.git
cd node-json-crud
```

### Install dependencies:
```sh
npm install
```

### Create a `.env` file in the root directory and add the following:
```env
PORT=3000
DATA_FILE=data.json
BASE_URL=http://localhost:3000
```

### Start the server:
```sh
npm start
```

### Open the browser and visit `http://localhost:3000`

## API Endpoints

| Method | Endpoint      | Description              |
|--------|--------------|--------------------------|
| GET    | `/items`     | Fetch all items         |
| POST   | `/items`     | Add a new item          |
| PUT    | `/items/:id` | Update an existing item |
| DELETE | `/items/:id` | Delete an item          |

## Frontend UI

The frontend is built using Materialize CSS and allows users to:
- View all items in a list
- Add new items
- Edit existing items
- Delete items

