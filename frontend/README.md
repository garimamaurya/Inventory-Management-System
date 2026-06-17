# Inventory Management System

A professional Full-Stack Inventory Management System developed using FastAPI, React.js, SQLAlchemy, and SQLite. This application helps users manage inventory efficiently by adding, viewing, and deleting products through a modern web interface.

---

## Features

✅ Add New Products

✅ View Product Inventory

✅ Delete Products

✅ FastAPI REST API

✅ React Frontend

✅ SQLite Database

✅ SQLAlchemy ORM

✅ Responsive User Interface

✅ Real-Time Data Updates

---

## Tech Stack

### Frontend
- React.js
- Axios
- CSS3
- Vite

### Backend
- FastAPI
- SQLAlchemy
- Pydantic
- SQLite

### Tools
- Git
- GitHub
- VS Code

---

## Project Structure

```text
Inventory Management System
│
├── Backend
│   ├── app
│   │   ├── database.py
│   │   ├── models.py
│   │   ├── schemas.py
│   │   └── main.py
│   │
│   ├── requirements.txt
│   └── inventory.db
│
├── frontend
│   ├── src
│   │   ├── App.jsx
│   │   ├── App.css
│   │   └── main.jsx
│   │
│   ├── package.json
│   └── vite.config.js
│
└── README.md
```

---

## API Endpoints

### Get All Products

```http
GET /products
```

### Add Product

```http
POST /products
```

Request Body:

```json
{
  "name": "Laptop",
  "quantity": 10,
  "price": 50000
}
```

### Delete Product

```http
DELETE /products/{id}
```

---

## Installation Guide

### Clone Repository

```bash
git clone https://github.com/garimamaurya/Inventory-Management-System.git
```

### Backend Setup

```bash
cd Backend

python -m venv .venv

.venv\Scripts\activate

pip install -r requirements.txt

uvicorn app.main:app --reload
```

Backend URL:

```text
http://127.0.0.1:8000
```

Swagger Documentation:

```text
http://127.0.0.1:8000/docs
```

---

### Frontend Setup

```bash
cd frontend

npm install

npm run dev
```

Frontend URL:

```text
http://localhost:5173
```

---

## Screenshots

Add project screenshots here.

### Dashboard

![Dashboard](screenshots/dashboard.png)

### API Documentation

![Swagger](screenshots/swagger.png)

---

## Future Enhancements

- Product Category Management
- Product Update Feature
- Search and Filter Products
- Low Stock Alerts
- Inventory Analytics Dashboard
- Authentication and Authorization
- Cloud Database Integration
- Deployment on Vercel and Render

---

## Resume Highlights

- Built a Full-Stack Inventory Management System using React and FastAPI.
- Developed RESTful APIs using FastAPI and SQLAlchemy.
- Implemented CRUD operations with SQLite database.
- Integrated frontend and backend using Axios.
- Managed source code using Git and GitHub.

---

## Author

**Garima Maurya**

GitHub: https://github.com/garimamaurya
