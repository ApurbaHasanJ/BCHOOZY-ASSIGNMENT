# Bchoozy

## Description

Bchoozy is a Node.js application using Express and MongoDB (Mongoose). This project demonstrates inventory management with real-time updates and error handling for orders.

## Features

- Inventory update on order creation
- Real-time stock management
- Error handling for insufficient stock and product not found

## Requirements

- Node.js
- MongoDB
- TypeScript
- Zod

## Installation

1. Clone the repository

```bash
git clone https://github.com/ApurbaHasanJ/BCHOOZY-ASSIGNMENT.git
cd BCHOOZY-ASSIGNMENT 
```

2. Install dependencies

```bash
npm install
```

3. Set up environment variables
Create a .env file in the root directory and add the following:

```bash
MONGO_URI=mongodb+srv://user:7744889933@believer.igrxpib.mongodb.net/bchoozy?retryWrites=true&w=majority&appName=Believer
PORT=5000
```
4. Development
To run the application in development mode:

```bash
npm run start:dev
```
for other commands follow the pacage.json file