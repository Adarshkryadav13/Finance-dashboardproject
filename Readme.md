# 💰 Finance Dashboard (Full Stack Project)

A full-stack **Finance Data Processing & Access Control System** built using **Django + React**.
This project allows users to manage financial records, analyze data, and view insights through a clean dashboard.

---

## 🚀 Features

### 🔐 Authentication

* JWT-based login system
* Secure API access
* Protected routes in frontend

### 👤 User Roles

* Admin
* Analyst
* Viewer
  (Role-based access control implemented in backend)

---

### 💰 Financial Records

* Add income/expense records
* View all records
* Delete records
* Categorize transactions
* Automatic user assignment (secure backend handling)

---

### 📊 Dashboard Analytics

* Total Income
* Total Expense
* Net Balance
* Category-wise summary
* Monthly trends
* Recent activity

---

### 🔍 Filtering

* Filter records by:
  * Category
  * Type (Income/Expense)
  * Date

---

### 🎨 Frontend UI

* Modern UI using Tailwind CSS
* Responsive design
* Charts using Recharts
* Protected routes
* Professional login page
* Navbar + Footer layout

---

## 🛠 Tech Stack

### Backend

* Python
* Django
* Django REST Framework
* JWT Authentication

### Frontend

* React (Vite)
* Axios
* Tailwind CSS
* Recharts

---

## 📁 Project Structure

```
finance-project/
│
├── backend/
│   ├── manage.py
│   ├── db.sqlite3
│   ├── users/
│   ├── records/
│   ├── dashboard/
│   └── config/
│
├── client/
│   ├── src/
│   ├── components/
│   ├── pages/
│
└── README.md
```

---

##  Installation & Setup

### 🔹 Backend Setup

```bash
cd backend
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt

python manage.py makemigrations
python manage.py migrate
python manage.py createsuperuser
python manage.py runserver
```

---

### 🔹 Frontend Setup

```bash
cd client
npm install
npm run dev
```

---

## 🔑 API Endpoints

### Authentication

* `POST /api/token/` → Login
* `POST /api/token/refresh/` → Refresh token

---

### Records

* `GET /api/records/`
* `POST /api/records/`
* `DELETE /api/records/{id}/`

---

### Dashboard

* `/api/dashboard/summary/`
* `/api/dashboard/category/`
* `/api/dashboard/monthly/`
* `/api/dashboard/recent/`

---

## 🔐 Security Features

* JWT Authentication
* Role-based access control
* User data protection (no manual user input)
* Protected frontend routes

---