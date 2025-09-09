Video Interview Proctoring System

A comprehensive video proctoring system designed for online interviews, developed as part of an SDE internship assignment for Tutodude. This application leverages real-time computer vision to monitor candidate focus and detect suspicious objects during interview sessions.

Live Application Links:

Frontend & Full Application: https://videoproctoringsystem.vercel.app/

Backend API: https://videoproctoringbackend.onrender.com

Features

Real-time Focus Detection: Monitors if the candidate is attentive and looking at the screen.

Face Detection: Detects presence/absence of a face and flags multiple faces in the frame.

Object Detection: Identifies suspicious items such as mobile phones, books, and other unauthorized devices.

Integrity Scoring: Computes a final integrity score based on deductions for detected suspicious events.

Detailed Reports: Generates comprehensive proctoring reports summarizing the session and logged events.

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

Node.js (v16 or higher)

npm (Node Package Manager)

MongoDB (local or cloud, e.g., MongoDB Atlas)

A modern web browser with camera access

1. Backend Setup
cd backend
npm install


Create a .env file in the backend directory and add your MongoDB connection URI:

MONGODB_URI='your-mongodb-connection-string'


Start the backend server:

npm run dev

2. Frontend Setup
cd frontend
npm install
npm run dev

Usage

Start Interview:
Visit http://localhost:3000
 or the live frontend link. Enter the candidate’s name and click Start Interview. Allow camera access when prompted.

Monitor Session:
The system provides real-time monitoring. The Detection Status panel updates with focus status, detected objects, and an event log.

End Session:
Click End Interview to conclude the session. A final proctoring report with an integrity score and event summary is displayed.

View Reports:
Access previously completed sessions via the View Reports section to review integrity scores and detailed logs.

API Endpoints
HTTP Method	Endpoint	Description
POST	/api/sessions	Create a new session
POST	/api/sessions/:id/events	Log a detection event
PUT	/api/sessions/:id/end	End a session
GET	/api/sessions/:id	Retrieve final report
Evaluation Criteria

Functionality: 35%

Code Quality & Documentation: 20%

UI/UX Simplicity: 15%

Detection Accuracy (Focus + Object): 20%

Bonus: Eye closure detection, real-time alerts: 10%
