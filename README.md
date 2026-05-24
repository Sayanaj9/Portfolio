# My-Portfolio

A modern, responsive developer portfolio showcasing my professional experience, technical projects, and full-stack engineering skills.


---

## Live Demo

Demo Link: https://sayanajoy-portfolio.vercel.app/

## Features
- Responsive modern UI optimized for desktop and mobile
- Interactive project cards with professional experience and technical skills showcase
- Smooth navigation and clean component-based architecture
- Resume download integration
- Deployed with Vercely

## Tech Stack
- **Frontend:** React, SCSS,Bootsrap
- **Routing & State:** React Context, React Router
- **CI/CD:** GitHub, Vercel
- **Design:** Responsive UI, Component-Based Architecture


## Screenshots

### Home Page
![Home](./screenshots/home.png)

---

### Coding Workspace

![Workspace](./screenshots/passed_testcases/codesection1.png)

#### Successful Testcase Execution (Including Hidden Testcases)

![Testcase](./screenshots/passed_testcases/codesection2.png)

![Testcase](./screenshots/passed_testcases/codesection3.png)

#### Partial Testcase Failure Scenario

![Testcase](./screenshots/failed_testcases/codesection1.png)

![Testcase](./screenshots/failed_testcases/codesection2.png)
---

### AI Analysis

![AI Analysis](./screenshots/ai.png)

### Jest Unit Test Results

![Unit Testcases](./screenshots/unit_testcase.png)

---

## Setup Instructions

### Prerequisites
- Node.js (v18+ recommended)
- npm
- PostgreSQL

### 1. Clone the repository
```sh
git clone <repo-url>
cd CodePractise
```

### 2. Backend Setup
```sh
cd backend
npm install
# Configure your .env with DB connection and OpenRouter API key
npm run dev
```

### 3. Frontend Setup
```sh
cd frontend
npm install
npm run dev
```

### 4. Database Setup
- Create a PostgreSQL database and run the provided schema/migration scripts in `backend/db/`.

### 5. Running Tests
```sh
cd frontend
npm test
```

---

## Folder Structure
```
CodePractise/
├── backend/
│   ├── src/
│   ├── db/
│   └── ...
├── frontend/
│   ├── src/
│   ├── public/
│   └── ...
└── README.md
```

---

## Future Improvements

- Authentication
- Submission history
- Search and sort based on question type and difficulty

---

## Author
Sayana Joy
GitHub: https://github.com/Sayanaj9