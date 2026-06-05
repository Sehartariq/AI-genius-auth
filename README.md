# 🔐 AI-Genius Authentication System

> A secure, stateless authentication and authorization subsystem built with Node.js/Express and JWT. Implements Role-Based Access Control (RBAC) with token lifecycle management.

---

## 📋 Project Overview

This project is the core security module for **"AI-Genius"**, a SaaS platform that provides premium AI text and image generation. The backend enforces authentication, token expiration, and role-based access to prevent unauthorized API abuse.


| Task | Implementation |
|------|----------------|
| ✅ Authentication Workflow | Login with email/password, returns Access + Refresh tokens |
| ✅ JWT Verification | Custom middleware that validates Bearer tokens |
| ✅ Token Refresh | Silent refresh endpoint for expired access tokens |
| ✅ Role-Based Access Control | Admin, Premium_User, Free_User with different permissions |

---

## 🛠️ Technologies Used

| Technology | Purpose |
|------------|---------|
| **Node.js** | JavaScript runtime |
| **Express.js** | Web framework |
| **JSON Web Tokens (JWT)** | Authentication tokens |
| **bcryptjs** | Password hashing |
| **cookie-parser** | HTTP cookie handling |
| **dotenv** | Environment variables |
| **Mock Database** | JavaScript array (no MongoDB required) |

---

## 🚀 API Endpoints

### Authentication Routes

| Method | Endpoint | Description |
|--------|----------|-------------|
| `POST` | `/api/auth/login` | Login - returns Access Token + sets Refresh Token cookie |
| `POST` | `/api/auth/refresh` | Get new Access Token using Refresh Token |
| `POST` | `/api/auth/logout` | Logout - clears Refresh Token cookie |

### AI Model Routes (Protected)

| Method | Endpoint | Required Role | Description |
|--------|----------|---------------|-------------|
| `GET` | `/api/ai/free-model` | All logged-in users | Free AI text generation |
| `POST` | `/api/ai/premium-model` | `Premium_User` or `Admin` | Premium AI with image generation |
| `DELETE` | `/api/ai/purge-cache` | `Admin` only | Clear server cache |

---

## 👥 Test Accounts

Use these credentials to test different role permissions:

| Email | Password | Role | Access Level |
|-------|----------|------|--------------|
| `admin@test.com` | `admin123` | **Admin** | Full access to everything |
| `premium@test.com` | `premium123` | **Premium_User** | Can access premium AI models |
| `free@test.com` | `free123` | **Free_User** | Basic AI access only |

---

## 📦 Installation & Setup

### Prerequisites
- [Node.js](https://nodejs.org/) 
- [Postman](https://www.postman.com/) (for testing)

