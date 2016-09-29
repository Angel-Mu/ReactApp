'use strict'

import React, { Component } from "react";  
import { Link } from 'react-router';

export default class Navigation extends Component {  
  render() {
    return (
      <div className="frame">
        <ul>
          <li className="bit-2"><Link to="dashboard">Dashboard</Link></li>
          <li className="bit-2"><Link to="login">Login</Link></li>
        </ul>
      </div>
    );
  }
}