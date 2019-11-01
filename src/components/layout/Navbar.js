import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from '../../contexts/AuthContext';
// import { ISLOGGEDIN_MUTATION } from "../gql/Mutations";
// import { ISLOGGEDIN_QUERY, CURRENT_USER_QUERY } from "../gql/Queries";
// import { useMutation, useQuery, useApolloClient } from '@apollo/react-hooks';
// import { useHistory } from "react-router-dom";

const Navbar = () => {
  // const [user, setUser] = useState({});
  // let history = useHistory();
  const { isAuthenticated } = useContext(AuthContext);

  // const onLogoutClick = e => {
  //   e.preventDefault();
  //   localStorage.clear();
  //   client.writeData({ data: { isAuth: false } });
  //   history.push("/login");

  // }


  // const {
  //   data,
  //   loading,
  //   error,
  // } = useQuery(ISLOGGEDIN_QUERY);

  // const client = useApolloClient();

  //seems to only be available after refresh
  // const {
  //   data: currentUser,
  //   loading: currentUserQueryLoading,
  //   error: currentUserQueryError
  // } = useQuery(CURRENT_USER_QUERY, {
  //   variables: {
  //     email: "onew1ng3d@hotmail.com"
  //   }
  // });
  // console.log(data);
  // console.log(currentUser);
  // console.log(currentUserQueryLoading);
  // console.log(currentUserQueryError);

  // useEffect(() => {
  //   setUser(currentUser);
  //   console.log(user);
  // },
  //   []
  // )

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
          // src={user.avatar}
          // alt={user.name}
          // src={!currentUserQueryLoading && currentUser ? currentUser.user.avatar : ""}
          // alt={!currentUserQueryLoading && currentUser ? currentUser.user.name : ""}
          style={{ width: "25px", marginRight: "5px" }}
          title="You must have a Gravatar connected to your email to display an image"
        />
      </li>
      <li className="nav-item flex-center-vertically">
        <Link className="nav-link" to="/dashboard">
          {/* {user.name} */}
          {/* {!currentUserQueryLoading && currentUser ? currentUser.user.name : null} */}
          Test
        </Link>
      </li>
      <li className="nav-item flex-center-vertically">
        <a
          href="/#"
          // onClick={onLogoutClick}
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
          {/* {(data && data.isAuth) ? authLinks : guestLinks} */}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;