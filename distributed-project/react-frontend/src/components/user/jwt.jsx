import axios from 'axios';
import jwtDecode from 'jwt-decode';

const JWT_TOKEN_KEY = 'jwt_token';
const JWT_EMAIL_KEY = 'jwt_email';
const JWT_ROLE_KEY = 'jwt_role';

const setJWT = (token,email,role) => {
  localStorage.setItem(JWT_TOKEN_KEY, token);
  localStorage.setItem(JWT_EMAIL_KEY,email)
  localStorage.setItem(JWT_ROLE_KEY,role)
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
};

const removeJWT = () => {
  localStorage.removeItem(JWT_TOKEN_KEY);
  localStorage.removeItem(JWT_EMAIL_KEY);
  localStorage.removeItem(JWT_ROLE_KEY);
  delete axios.defaults.headers.common['Authorization'];
};

const getJWT = () => {
  return localStorage.getItem(JWT_TOKEN_KEY);
};
const getEmail = () => {
  return localStorage.getItem(JWT_EMAIL_KEY);
};
const getRole = () => {
  return localStorage.getItem(JWT_ROLE_KEY);
};

const isLoggedIn = () => {
  const token = getJWT();
  if (token) {
    const decodedToken = jwtDecode(token);
    const expirationDate = new Date(decodedToken.exp * 1000);
    return expirationDate > new Date();
  }
  return false;
};

export default {
  setJWT,
  removeJWT,
  getJWT,
  isLoggedIn,
  getEmail,
  getRole
};
