# 🎨 Nexus Canvas
### A High-Performance, Real-Time Collaborative Whiteboard Engine

Nexus Canvas is a professional-grade collaborative tool designed for distributed teams. Built with a **Hybrid Database Strategy** and **WebSocket-driven state synchronization**, it allows multiple users to sketch, ideate, and strategize on an infinite canvas with sub-50ms latency.

---

## 🚀 Key Features
* **Real-Time Collaboration:** Live "Ghost Cursors" and instant shape synchronization using Socket.io.
* **Vector Shape Engine:** Support for rectangles, circles, lines, and text with full transformation handles.
* **Hybrid Data Persistence:** * **PostgreSQL (Prisma):** Manages user accounts, board ownership, and granular permissions.
    * **MongoDB:** Stores heavy canvas JSON snapshots for fast retrieval and versioning.
* **Optimistic UI:** Smooth drawing experience that predicts local changes before server confirmation.
* **Mobile Hand-off:** Smart detection that switches to "View & Comment" mode on mobile devices.

---

## 🛠️ The Tech Stack
* **Frontend:** React, TypeScript, Tailwind CSS, Fabric.js (Canvas Engine), Zustand (State).
* **Backend:** Node.js, Express, Socket.io.
* **Databases:** PostgreSQL (Relational) & MongoDB (Document-store).
* **ORM:** Prisma.
* **Infrastructure:** Docker (Postgres/Mongo containers).

---

## 🏗️ System Architecture
The project utilizes a **Dual-Database Architecture** to optimize for both security and performance:

1. **Identity Layer (SQL):** Prisma verifies identity and checks for `EDITOR` or `VIEWER` access.
2. **Stream Layer (WebSockets):** Broadcasts "Deltas" (coordinates) to users in the same room.
3. **Persistence Layer (NoSQL):** Debounced saves of the full canvas state to MongoDB.



---

## 🛠️ Local Setup

### 1. Prerequisites
* Docker Desktop installed.
* Node.js (v18+) installed.

### 2. Database Setup (Docker)
```bash
docker run --name nexus-db -e POSTGRES_USER=yourname -e POSTGRES_PASSWORD=yourpassword -p 5432:5432 -d postgres:latest