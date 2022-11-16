import React from 'react';
import { Link } from 'react-router-dom';
import Hero from './Hero';

const NotFound = () => (
  <div>
    (<Hero text="ERROR 404 PAGE NOT FOUND" />)
    <Link to="/">Go Home</Link>
  </div>
);

export default NotFound;