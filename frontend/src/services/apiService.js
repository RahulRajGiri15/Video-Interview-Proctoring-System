import axios from 'axios';

const API_URL = 'https://videoproctoringbackend.onrender.com/api/sessions';

// const API_URL = '/api/sessions';

// export const apiService = {
//   // Create a new session on the backend
//   createSession: async (sessionData) => {
//     const response = await axios.post(API_URL, sessionData);
//     return response.data;
//   },

//   // Log an event to the backend
//   logEvent: async (sessionId, eventData) => {
//     try {
//       await axios.post(`${API_URL}/${sessionId}/events`, eventData);
//     } catch (error) {
//       console.error('Error logging event:', error);
//     }
//   },

//   // End a session and send the final data
//   endSession: async (sessionId, sessionData) => {
//     const response = await axios.put(`${API_URL}/${sessionId}/end`, sessionData);
//     return response.data;
//   },

//   // Fetch a specific report from the backend
//   getReport: async (sessionId) => {
//     const response = await axios.get(`${API_URL}/${sessionId}`);
//     return response.data;
//   }
// };