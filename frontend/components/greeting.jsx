import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = ({ currentUser, logout }) => {
  if (currentUser) {
    return (
      <div>
        Hello, { currentUser.username }!
        <input type="submit" onClick={logout} value="Log Out" />
      </div>
    );
  }

  return (
    <div>
      <Link to="/signup">Sign Up</Link>
      <Link to="/login">Log In</Link>
    </div>
  );
};

export default Greeting;
