# Mutli Form

A simple Multi Form application built with **React**. The app indicates a UI/UX design for **SignUp**, **OTP Verification** and **MultiForm Data**.

## Features

- SignUp Using email and Password
- OTP Verification
- Drag and drop file upload

---

## Setup Instructions

### Step 1: Clone the Repository
```bash
git clone https://github.com/pythonking28/multiform.git
```
### Step 2: Navigate to the Project Folder
```bash
cd multiform
```
### Step 3: Install Dependencies
Ensure that you have Node.js (v16 or above) installed, then run:

```bash
npm install
```

### Step 4: Run the Development Server
Start the server with:

```bash
npm run dev
```
### Step 5: Access the App
Open your browser and navigate to:

```bash
http://localhost:5173
```
## How to Use
### Sign Up:
Use the input field at the top to add username, email and password. Email is required for the next step.
### Verify OTP: 
In this page type any otp code and click on verify button to move on to the next step.
### Form: 
Fill Out the form as you desire.
### Drag and Drop: 
Files can be dragged and dropped as well as uploaded manually from local machine.

## Technology Choices and Rationale
### React + Vite: 
For building nice looking user interface.
### TailwindCSS: 
Provides rapid and modern styling capabilities for a responsive and attractive UI.

## Known Limitations / Trade-offs
### No State Management: 
This app clearly replicates the UI/UX design only. State Management is avoided in this case.
### No Backend: 
The app does not have a backend; hence, it is suitable for local use only.
### No Authentication: 
The OTP verification is only for the assignment.
## Future Improvements
* Add authentication and user-specific boards.
* Implement a backend with a database for data persistence.
* Introduce themes for better visual customization.

## Live Demo
### You can access the live version of the app here:
https://multiform-theta.vercel.app/

## Issues Encountered
### Vercel Deployment of Vite Image issue
After deploying to vercel, the images were not being loaded. The issue resolved after reading through stackoverflow guides stating to keep all images in the public folder


