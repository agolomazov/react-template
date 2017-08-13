import React, { Component } from 'react';
import { Link } from 'react-router';

class Menu extends Component {
  render() {
    return (
      <div>
        <Link to="/">Home page</Link><br />
        <Link to="/about">About page</Link>
      </div>
    );
  }
};

export default Menu;
