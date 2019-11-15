import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ApolloProvider } from "@apollo/react-hooks";
import client from "./apollo";


import PrivateRoute from './components/common/PrivateRoute';

import Navbar from "./components/layout/Navbar";
import Landing from "./components/layout/Landing";
import Footer from "./components/layout/Footer";

import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import Dashboard from "./components/dashboard/Dashboard";

import AuthContextProvider from './contexts/AuthContext';
import ProfileContextProvider from "./contexts/ProfileContext";
import ExperienceContextProvider from "./contexts/ExperienceContext";
import EducationContextProvider from "./contexts/EducationContext";
import PostContextProvider from "./contexts/PostContext";
import CommentContextProvider from "./contexts/CommentContext";

import CreateProfile from "./components/add-credentials/CreateProfile";
import AddExperience from "./components/add-credentials/AddExperience";
import EditExperience from "./components/add-credentials/EditExperience";
import AddEducation from "./components/add-credentials/AddEducation";
import EditEducation from "./components/add-credentials/EditEducation";
import Profiles from './components/profiles/Profiles';
import Profile from './components/profile/Profile';
import Posts from './components/posts/Posts';
import Post from './components/post/Post';

import NotFound from './components/common/NotFoundPage';

import "./App.css";

// Check for token
// if (localStorage.jwtToken) {
//   //Set auth token header auth
//   setAuthToken(localStorage.jwtToken);
//   // decode token and get user info and expiration
//   const decoded = jwt_decode(localStorage.jwtToken);
//   //Set user and isAuthenticated
//   store.dispatch(setCurrentUser(decoded));

//   //Check for expired token
//   const currentTime = Date.now() / 1000;
//   if (decoded.exp < currentTime) {
//     // Logout user
//     store.dispatch(logoutUser());

//     store.dispatch(clearCurrentProfile());

//     //Redirect to login
//     window.location.href = '/login';
//   }
// }

const App = () => {
  return (
    <div className="App">
      <ApolloProvider client={client}>
        <AuthContextProvider>
          <ProfileContextProvider>
            <ExperienceContextProvider>
              <EducationContextProvider>
                <Router>
                  <Navbar />
                  <Route exact path="/" component={Landing} />
                  <Route exact path="/register" component={Register} />
                  <Route exact path="/login" component={Login} />
                  <Route exact path="/profiles" component={Profiles} />
                  <Route exact path="/profile/:handle" component={Profile} />

                  <Switch>
                    <PrivateRoute exact path="/dashboard" component={Dashboard} />
                  </Switch>
                  <Switch>
                    <PrivateRoute exact path="/create-profile" component={CreateProfile} />
                  </Switch>
                  <PrivateRoute exact path="/edit-profile" component={CreateProfile} />
                  <Switch>
                    <PrivateRoute exact path="/add-experience" component={AddExperience} />
                  </Switch>
                  <Switch>
                    <PrivateRoute exact path="/add-education" component={AddEducation} />
                  </Switch>
                  <Switch>
                    <PrivateRoute exact path="/edit-experience/:exp_id" component={EditExperience} />
                  </Switch>
                  <Switch>
                    <PrivateRoute exact path="/edit-education/:edu_id" component={EditEducation} />
                  </Switch>
                  <PostContextProvider>
                    <Switch>
                      <PrivateRoute exact path="/feed" component={Posts} />
                    </Switch>
                    <CommentContextProvider>
                      <Switch>
                        <PrivateRoute exact path="/post/:id" component={Post} />
                      </Switch>
                    </CommentContextProvider>
                  </PostContextProvider>
                  <Route exact path="/not-found" component={NotFound} />

                  <Footer />
                </Router>
              </EducationContextProvider>
            </ExperienceContextProvider>
          </ProfileContextProvider>
        </AuthContextProvider>
      </ApolloProvider>
    </div>
  );
};

export default App;
