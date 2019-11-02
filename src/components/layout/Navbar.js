import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from '../../contexts/AuthContext';
import { useHistory } from "react-router-dom";

const Navbar = () => {
  const { isAuthenticated, currentUser, toggleAuth, clearCurrentUser } = useContext(AuthContext);
  let history = useHistory();

  const onLogoutClick = e => {
    e.preventDefault();
    localStorage.clear();
    toggleAuth();
    clearCurrentUser();
    history.push("/login");

  }

  const authLinks = (
    <ul className="navbar-nav ml-auto">
      <li className="nav-item flex-center-vertically">
        <Link className="nav-link" to="/feed">
          Post Feed
          </Link>
      </li>
      <li className="nav-item flex-center-vertically">
        <Link className="nav-link" to="/dashboard">
          Dashboard
        </Link>
      </li>
      <li className="nav-item flex-center-vertically">
        <img
          className="rounded-circle ml-2"
          src={currentUser ? currentUser.avatar : ""}
          alt={currentUser ? currentUser.name : ""}
          style={{ width: "25px", marginRight: "5px" }}
          title="You must have a Gravatar connected to your email to display an image"
        />
      </li>
      <li className="nav-item flex-center-vertically">
        <Link className="nav-link" to="/dashboard">
          {currentUser ? currentUser.name : ""}
        </Link>
      </li>
      <li className="nav-item flex-center-vertically">
        <a
          href="/#"
          onClick={onLogoutClick}
          className="nav-link"
        >
          Logout
        </a>
      </li>
    </ul>
  );

  const guestLinks = (
    <ul className="navbar-nav ml-auto">
      <li className="nav-item">
        <Link className="nav-link" to="/register">
          Sign Up
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/login">
          Login
        </Link>
      </li>
    </ul>
  );

  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-4">
      <div className="container">
        <Link className="navbar-brand" to="/">
          DevsHub
          </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#mobile-nav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="mobile-nav">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/profiles">
                {""}
                Developers
                </Link>
            </li>
          </ul>
          {isAuthenticated ? authLinks : guestLinks}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;