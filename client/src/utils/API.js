import axios from 'axios';

export default {
  // Returns all users (no user case)
  getAllUsers: function() {
    return axios.get('/api/users/');
  },
  // Gets all user info by id including associated events
  getUser: function(id) {
    return axios.get('/api/users/' + id);
  },
  // adds a new user
  createUser: function(userData) {
    return axios.post('/api/users/', userData);
  },
  // Deletes the user with the given id
  deleteUser: function(id) {
    return axios.delete('/api/users/' + id);
  },
  // Returns all events (no user case)
  getAllEvents: function() {
    return axios.get('/api/events/');
  },
  // Gets all event info by id
  getEvent: function(id) {
    return axios.get('/api/events/' + id);
  },
  // creates a new event
  createEvent: function(eventData) {
    return axios.post('/api/events/', eventData);
  },
  // Deletes the event with the given id
  deleteEvent: function(id) {
    return axios.delete('/api/events/' + id);
  },
  // Updates event data for the given id
  updateEvent: function(id, eventData) {
    return axios.put('/api/events/' + id, eventData);
  },
  // Appends an invite response to the given event id
  addResponse: function(id, newResponse) {
    return axios.put('/api/events/responses' + id, newResponse);
  },
  // Returns all responses for given event id
  getResponses: function(id) {
    return axios.get('/api/events/responses' + id);
  }
};
