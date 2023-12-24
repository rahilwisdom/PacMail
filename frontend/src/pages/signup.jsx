import React, { useState } from 'react';
import '../SignUpForm.css'; // Import file CSS terpisah

const SignUpForm = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLogin, setIsLogin] = useState(false);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (isLogin) {
      // Lakukan logika login di sini
      console.log('Login with:', email, password);
    } else {
      // Lakukan logika signup di sini
      // console.log('Sign Up:', fullName, email, password);
      
    }
  };

  // Prefix pada judul halaman
  const pageTitlePrefix = isLogin ? 'Login' : 'Sign Up';

  return (
    <div className="signup-container">
      <h2 style={{ color: '#fff' }}>{pageTitlePrefix} - PacMail</h2>
      <form className="signup-form" onSubmit={handleFormSubmit}>
        {!isLogin && (
          <div className="form-group">
            <label htmlFor="fullName">Full Name:</label>
            <input
              type="text"
              id="fullName"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
          </div>
        )}
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="submit-button">
          {isLogin ? 'Login' : 'Sign Up'}
        </button>
      </form>
      <p className="toggle-link">
        {isLogin ? "Don't have an account? " : 'Already have an account? '}
        <span onClick={() => setIsLogin((prev) => !prev)}>
          {isLogin ? 'Sign Up' : 'Login'}
        </span>
      </p>
    </div>
  );
};

export default SignUpForm;