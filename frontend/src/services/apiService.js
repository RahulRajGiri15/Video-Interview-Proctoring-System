import axios from 'axios';



const API_BASE = import.meta.env.VITE_API_BASE_URL || '/api';

// Ensure no trailing slash before appending paths
const normalizeBase = (base) => base.endsWith('/') ? base.slice(0, -1) : base;
const API_URL = `${normalizeBase(API_BASE)}/sessions`;

export const apiService = {
  // Create a new session on the backend
  createSession: async (sessionData) => {
    const response = await axios.post(API_URL, sessionData);
    return response.data;
  },

  // Log an event to the backend
  logEvent: async (sessionId, eventData) => {
    try {
      await axios.post(`${API_URL}/${sessionId}/events`, eventData);
    } catch (error) {
      console.error('Error logging event:', error?.response?.data || error?.message || error);
    }
  },

  // End a session and send the final data
  endSession: async (sessionId, sessionData) => {
    const response = await axios.put(`${API_URL}/${sessionId}/end`, sessionData);
    return response.data;
  },

  // Fetch a specific report from the backend
  getReport: async (sessionId) => {
    const response = await axios.get(`${API_URL}/${sessionId}`);
    return response.data;
  }
};