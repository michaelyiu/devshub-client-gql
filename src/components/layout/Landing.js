import React, { useContext } from "react";
import { AuthContext } from '../../contexts/AuthContext';
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

const Landing = () => {
  const { isAuthenticated } = useContext(AuthContext);

  const history = useHistory();

  if (isAuthenticated)
    history.push("/dashboard");

  return (
    <div className="landing">
      <div className="dark-overlay landing-inner text-light">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <h1 className="display-3 mb-4">Developer Hub</h1>
              <p className="lead">
                {" "}
                Create a developer profile/portfolio, share posts and get help
                from other developers
                </p>
              <hr />
              <Link to="/register" className="btn btn-lg btn-info mr-2">
                Sign Up
                </Link>
              <Link to="/login" className="btn btn-lg btn-light">
                Login
                </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;