import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const navStyle = {
    color: 'white',
  };
  return (
    <nav>
      <h3 style={navStyle}>My BlogPost</h3>

      <ul className='nav-links'>
        <Link style={navStyle} to='/posts'>
          <li>Posts</li>
        </Link>
        <Link style={navStyle} to='/users'>
          <li>Users</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
