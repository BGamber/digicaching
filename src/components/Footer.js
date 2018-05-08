import React from 'react';
import { Link } from 'react-router-dom';

let Footer = () => {
  return (
    <footer className="footer">
    <Link to="/profile">
    <div>
     Profile
    </div>
  </Link>
  <Link to="/create-profile">
    <div>
     Register
    </div>
  </Link>
    </footer>
  );
};

export default Footer;