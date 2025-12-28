 # School Management Web Application

## Project Overview
This project is a mini web application built using **Next.js** (React recommended) and **MySQL** to manage school data. The application has two main pages:

1. **Add School** - A form to input and store school information.
2. **Show Schools** - A page to display the list of schools with relevant details.

The application is fully responsive and works on both desktop and mobile devices.

---

## Features

### 1. Add School Page (`addSchool.jsx`)
- Form to input school details:
  - Name
  - Address
  - City
  - State
  - Contact Number
  - Email ID
  - School Image
- **Validation** on inputs using `react-hook-form`:
  - Email validation
  - Required fields
  - Proper number validation for contact
- Stores uploaded images in a folder named `schoolImages`.
- Responsive design for mobile and desktop.

### 2. Show Schools Page (`showSchools.jsx`)
- Displays a list of schools in a card-based layout similar to e-commerce product listings.
- Shows only:
  - School Name
  - Address
  - City
  - Image
- Responsive design for mobile and desktop.
- Fetches data directly from the MySQL database.

---

## Database

**MySQL Table: `schools`**

| Field      | Type        | Description                 |
|----------- |------------ |---------------------------- |
| id         | INT         | Auto-increment primary key  |
| name       | TEXT        | Name of the school          |
| address    | TEXT        | School address              |
| city       | TEXT        | City where the school is located |
| state      | TEXT        | State                       |
| contact    | NUMBER      | Contact number              |
| image      | TEXT        | Path to the school image    |
| email_id   | TEXT        | Email of the school         |

---

## Technologies Used
- **Frontend:** Next.js, React, React-Hook-Form, CSS
- **Backend:** Node.js, Express (if used), API routes in Next.js
- **Database:** MySQL
- **File Storage:** Local folder (`schoolImages`)
- **Deployment:** Vercel(project) / railway(database) 

---

## Setup Instructions

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd <project-folder>
Install dependencies:

bash
Copy code
npm install
Setup MySQL Database:

Create a database (e.g., schoolDB)

Create the schools table using the schema above.

Configure environment variables:
Create a .env file in the root directory:

env
DB_HOST=<your-db-host>
DB_USER=<your-db-username>
DB_PASSWORD=<your-db-password>
DB_NAME=<your-db-name>

Run the development server:

npm run dev
Open http://localhost:3000 to view it in the browser.

Project Structure
/project-root
  /pages
    addSchool.jsx
    showSchools.jsx
  /public
    /schoolImages
  /lib
    db.js
  package.json
  README.md


Images uploaded are stored locally under /public/schoolImages.

Author
Your Name
B.Tech Student | Web Developer
