import React from 'react';
import { Link } from 'react-router-dom';

const AppHeader = ({ headerTitleModifible = "About ME", image = "path/to/image.jpg", login = true }) => {
  return (
    <nav className="navbar p-0 fixed-top navbar-dark bg-dark bg-gradient text-white navbar-expand-md">
      <div className="container-fluid">
        <div id="logo">
          <span className="gear">S</span>
          <h3>ESCNIL994</h3>
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse general-text items-header " id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto d-flex">
            <li className="list-item m-3">
              <Link className="text-white text-header" to="/projects/get-all-projects">Projects</Link>
            </li>
            <li className="list-item m-3">
              <Link className="text-white text-header" to="/user/profile/get-escnil994-info">{headerTitleModifible}</Link>
            </li>
            <li className="list-item m-3">
              <Link className="text-white text-header" to="/user/profile/contact">Contact</Link>

            </li>

            {/*
            {login && (
              <div className="flex-shrink-0 dropdown m-3 list-item">
                <a
                  href="#"
                  className="d-block link-white text-decoration-none dropdown-toggle"
                  id="dropdownUser2"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <img src={image} alt="User" width="32" height="40" className="rounded-circle" />
                </a>
                <ul
                  className="dropdown-menu text-small shadow navbar-dark bg-dark bg-gradient fade-in-left"
                  id="adminOptions"
                  aria-labelledby="dropdownUser2"
                >
                  <li>
                    <a className="dropdown-item general-text text-white" href="#">New project...</a>
                  </li>
                  <li>
                    <a className="dropdown-item general-text text-white" href="#">New post...</a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item general-text text-white" href="#">Sign out</a>
                  </li>
                </ul>
              </div>
            )}
            */}
            
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default AppHeader;
