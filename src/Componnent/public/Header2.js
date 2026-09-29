import React from 'react';
import { Link } from 'react-router-dom';
import logo01 from './logo01.png';

const Header2 = () => {
    return (
        <div>
            <nav class="navbar bg-dark navbar-expand-lg" data-bs-theme="dark">
      <div class="container">
        <Link class="nav-link" to="/"><img src={logo01} alt="Logo" width={50} height={50} /></Link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <Link class="nav-link active" aria-current="page" to="/">Home</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/About">Présentation</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/Service">Service</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/Contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
        </div>
    );
}

export default Header2;
