import React from 'react';
import { Link } from "react-router-dom";
import '../assets/css/App.css';

function Header() {
  return (
    <div className="header">
        <div className="container">
            <div className="menu">
                <Link className="logo" to="/">Skar.id</Link>
                <Link className="item" to="/">Learn Programming</Link>
            </div>
        </div>
    </div>
  );
}

export default Header;
