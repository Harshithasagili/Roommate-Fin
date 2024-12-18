# Roommate Finder Application

This is a web-based application to assist users in finding roommates and/or apartments. The project includes a backend built with Node.js and Express, and a frontend developed using React.js.

---

## Features
1. Submit user details like name, phone number, budget, preferences, and search type.
2. View a list of submitted roommates.
3. Form validation:
   - Name field accepts only letters and spaces.
   - Number field accepts only digits.
4. Options to choose between searching for roommates only or roommates and apartments both.

---

## Project Structure
- backend/: Contains the server code (Node.js with Express).
- frontend/: Contains the client-side code (React.js).

---

## Setup Instructions

### Prerequisites
- Install [Node.js](https://nodejs.org/) (v16 or above).
- Install [npm](https://www.npmjs.com/).
- Install [Git](https://git-scm.com/).

---

## 1. Clone the Repository
Run the following command in your VS Code terminal in any new folder created:

```bash
git clone https://github.com/Harshithasagili/Roommate-Fin.git
cd Roommate-Fin
```

---

## 2. Backend Setup
In the backend directory, run the following commands:

```bash
cd backend
npm install
node index.js
```
The server will run at http://localhost:5000.

## 3. Frontend Setup
In the new terminal in VS Code simultaneously,In the frontend directory, run the following commands:

```bash
cd frontend
npm install
npm start
```
The application will open in your default browser at http://localhost:3000.

## Usage Instructions

1. Open the application:
   - Frontend: [http://localhost:3000](http://localhost:3000)
   - Backend: [http://localhost:5000](http://localhost:5000)

2. Fill out the form:
   - Provide your name, phone number, budget, and preferences.
   - Choose your search type (roommate only or roommate and apartment both).
   - Click "Submit".

3. View available roommates:
   - Scroll down to the "Available Roommates" section to see the list of submitted roommates.




