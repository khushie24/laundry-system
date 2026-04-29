# 🧺 Mini Laundry Order Management System (AI-First)

## 📌 Overview

This project is a lightweight backend system designed to manage daily operations of a dry cleaning store. It supports order creation, status tracking, billing calculation, and basic business insights.

The goal of this assignment was not just to build features, but to **leverage AI tools effectively** while maintaining correctness, clarity, and ownership of the final solution.

---

## 🚀 Setup Instructions

### 1. Clone the repository

```bash
git clone https://github.com/khushie24/laundry-system.git
cd laundry-system
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the server

```bash
npm start
```

Server runs at:

```
http://localhost:3000
```

---

## ✅ Features Implemented

### 🔹 Create Order

* Accepts customer name and phone number
* Supports multiple garments (Shirt, Pants, Saree, etc.)
* Quantity & price per item
* Automatically calculates total bill
* Generates unique Order ID

---

### 🔹 Order Status Management

Each order supports lifecycle states:

* RECEIVED
* PROCESSING
* READY
* DELIVERED

Status can be updated via API with validation.

---

### 🔹 View Orders

* Fetch all orders
* Filter by:

  * Status
  * Customer name
  * Phone number

---

### 🔹 Dashboard

Provides:

* Total number of orders
* Total revenue generated
* Order distribution by status

---

## 📡 API Endpoints

| Method | Endpoint           | Description                       |
| ------ | ------------------ | --------------------------------- |
| POST   | /orders            | Create a new order                |
| GET    | /orders            | Get all orders (supports filters) |
| PATCH  | /orders/:id/status | Update order status               |
| GET    | /dashboard         | Get summary metrics               |

---

## 🧠 AI Usage Report (Core Evaluation Section)

### 🔹 Tools Used

* ChatGPT (primary tool for development guidance)
* GitHub Copilot (minor assistance for autocomplete)

---

### 🔹 Sample Prompts Used

* "Create an Express.js API for order management with in-memory storage"
* "Add filtering by query parameters in Node.js"
* "Write logic to calculate total bill from items array"
* "Refactor code into controllers and routes"

---

### 🔹 Where AI Helped

* Quickly scaffolded the Express server
* Generated initial API structure
* Assisted with filtering and aggregation logic
* Helped iterate faster during development

---

### 🔹 Where AI Fell Short

* Initial code lacked input validation
* Poor separation of concerns (single file approach)
* No strict validation for order status
* Missed edge cases (empty input, invalid data)

---

### 🔹 Improvements Made Manually

* Added input validation for all required fields
* Refactored into modular structure (routes + controllers)
* Implemented strict status validation
* Improved readability and consistency
* Ensured all APIs behave correctly under edge cases

---

## ⚖️ Tradeoffs

* Used in-memory storage instead of database for faster development
* No authentication implemented to keep scope focused
* No frontend UI (backend-first approach)
* Data resets on server restart

---

## 🔮 Future Improvements

* Integrate MongoDB for persistence
* Add authentication (admin/staff login)
* Build a simple frontend dashboard
* Add estimated delivery date feature
* Deploy the application (Render / Railway)

---

## 📸 API Testing / Demo

* APIs tested using Thunder Client / Postman
* All endpoints verified manually
* (Screenshots or collection can be attached here)

---

## 🎯 Key Learnings

* AI significantly accelerates development, but requires validation
* Writing clean, modular code is essential beyond AI output
* Handling edge cases is critical for real-world applications

---

## 🏁 Conclusion

This project demonstrates:

* Ability to rapidly build functional systems using AI tools
* Ownership in improving and refining AI-generated code
* Strong understanding of backend fundamentals

---
<img width="1920" height="1080" alt="Screenshot 2026-04-29 121237" src="https://github.com/user-attachments/assets/45c5cf0c-27f8-40e1-aeb0-97cad430ee76" />
<img width="1920" height="1080" alt="Screenshot 2026-04-29 121328" src="https://github.com/user-attachments/assets/6e81cbdf-31cb-49d5-9db6-14004da5bf85" />
<img width="1920" height="1080" alt="Screenshot 2026-04-29 121528" src="https://github.com/user-attachments/assets/34cf5389-e81d-41e4-baa0-d3cd707eccfa" />
<img width="1920" height="1080" alt="Screenshot 2026-04-29 121606" src="https://github.com/user-attachments/assets/daf3791a-101c-48ef-942e-b6871b97f229" />
