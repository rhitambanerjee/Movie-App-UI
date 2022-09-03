import React from "react";
import "./Login.css";
import {Routes, Route, useNavigate} from 'react-router-dom';
import App from './App';

export default function Login() {
  const navigate = useNavigate();
  const Navigate = () => {
    navigate('/app');
  }
  <>
  return (
    <div class="form-container">
      <form class="register-form">
        <div class="success-message">Success! Thank you for registering</div>
        <input
          id="first-name"
          class="form-field"
          type="text"
          placeholder="First Name"
          name="firstName"
        />
        <span id="first-name-error">Please enter a first name</span>
        <input
          id="last-name"
          class="form-field"
          type="text"
          placeholder="Last Name"
          name="lastName"
        />
        <span id="last-name-error">Please enter a last name</span>
        <input
          id="email"
          class="form-field"
          type="text"
          placeholder="Email"
          name="email"
        />
        <span id="email-error">Please enter an email address</span> 
        <button class="form-field" onClick={Navigate}>
          Login
        </button>
      </form>
    </div>
    <Routes>
      <Route path="/app" element={<App/>} />
    </Routes>
  );
  </>
}