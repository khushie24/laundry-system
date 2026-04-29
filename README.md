# Mini Laundry Order Management System

## Setup
```bash
npm install
npm start
```

## Features
- Create Order
- Update Status
- Filter Orders
- Dashboard

## API Endpoints
- POST /orders
- GET /orders
- PATCH /orders/:id/status
- GET /dashboard

## AI Usage Report
Tools: ChatGPT

Prompts used:
- "Create Express API for order management"
- "Add filtering to API"

Where AI failed:
- No validation
- Poor structure

Fixes:
- Added validation
- Created folder structure
- Added status checks

## Tradeoffs
- In-memory DB
- No frontend

## Future Improvements
- Add MongoDB
- Deploy app
