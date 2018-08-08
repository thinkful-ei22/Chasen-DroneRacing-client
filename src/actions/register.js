import {SubmissionError} from 'redux-form';
import {API_BASE_URL} from '../config';
import { normalizeResponseErrors } from './utils';

export const registerUser = user => dispatch => {
  return fetch(`${API_BASE_URL}/api/users`, {
      method: 'POST',
      body: JSON.stringify(user),
      headers: {
          'Content-Type': 'application/json'
      }
  })
  .then(res => normalizeResponseErrors(res)) ///boilerplate for handling errors from API
  .then(res => res.json())
  .catch(err => {
    const {reason, message, location} = err;
    if (reason === 'ValidationError') {
      // Convert ValidationErrors into SubmissionErrors for Redux Form
      return Promise.reject(
          new SubmissionError({
              [location]: message
          })
      );
    } 
  });
}