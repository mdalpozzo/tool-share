import axios from 'axios';
import * as types from './actionTypes';

// DEVELOPMENT
// const apiHost = 'http://localhost:8000/';
// PRODUCTION WITH HEROKU
const apiHost = 'https://communitynews88.herokuapp.com/';

function url(endpoint) {
  return apiHost + endpoint;
}
