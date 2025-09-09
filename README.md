Video Interview Proctoring System

This is a comprehensive video proctoring system for online interviews, developed as an SDE internship assignment for Tutedude. The application uses real-time computer vision to monitor a candidate's focus and detect suspicious objects during an interview session.

Features
Real-time Focus Detection: Monitors if the candidate is looking at the screen.

Face Detection: Detects the presence/absence of a face and flags multiple faces in the frame.

Object Detection: Identifies suspicious items such as mobile phones, books, and other electronic devices.

Integrity Scoring: Calculates a final integrity score based on deductions for suspicious events.

Detailed Reports: Generates a final proctoring report with a summary of the session and all logged events.

Tech Stack
Frontend
React 18 with Vite

TensorFlow.js for object detection

MediaPipe for face mesh detection

React Webcam for camera access

Backend
Node.js with Express

MongoDB with Mongoose

Installation
Prerequisites
Node.js (version 16 or higher)

npm (Node Package Manager)

MongoDB (local or cloud instance like MongoDB Atlas)

A modern web browser with camera access

1. Backend Setup
Navigate to the backend directory and install the dependencies:

cd backend
npm install

Create a .env file in the backend directory and add your MongoDB connection URI:

MONGODB_URI='your-mongodb-connection-string'

Start the backend server:

npm run dev

2. Frontend Setup
Open a new terminal, navigate to the frontend directory, and install the dependencies:

cd frontend
npm install

Start the frontend development server:

npm run dev

Usage
Start Interview: Go to http://localhost:3000 in your browser. Enter the candidate's name and click "Start Interview". The application will request access to your camera.

Monitor: The system will begin real-time monitoring. The Detection Status panel will update with information about focus, objects, and an event log.

End Session: Click "End Interview" to stop the session. The final report will be displayed.

View Reports: Navigate to the "View Reports" section to see the final proctoring report, including the integrity score and event summary.

Evaluation Criteria
The project is evaluated based on the following criteria:

Functionality: 35%

Code Quality & Documentation: 20%

UI/UX Simplicity: 15%

Accuracy (Focus + Object Detect): 20%

Bonus Points (Eye closure detection, Real-time alerts): 10%

API Endpoints
HTTP Method

Endpoint

Description

POST

/api/sessions

Creates a new session

POST

/api/sessions/:id/events

Logs a detection event

PUT

/api/sessions/:id/end

Ends a session

GET

/api/sessions/:id

Gets the final report

License
This project is licensed under the MIT License.