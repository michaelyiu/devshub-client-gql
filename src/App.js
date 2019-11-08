import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import Landing from "./components/layout/Landing";
import Footer from "./components/layout/Footer";
import GQLTest from "./components/layout/GQLTest";

import Register from "./components/auth/Register";
import Login from "./components/auth/Login";

import Dashboard from "./components/dashboard/Dashboard";

import { ApolloProvider } from "@apollo/react-hooks";
import "./App.css";


import AuthContextProvider from './contexts/AuthContext';
import ProfileContextProvider from "./contexts/ProfileContext";

import client from "./apollo";

import CreateProfile from "./components/add-credentials/CreateProfile";
import EditProfile from "./components/add-credentials/EditProfile";
import AddExperience from "./components/add-credentials/AddExperience";
import EditExperience from "./components/add-credentials/EditExperience";
import AddEducation from "./components/add-credentials/AddEducation";
import EditEducation from "./components/add-credentials/EditEducation";
import ExperienceContextProvider from "./contexts/ExperienceContext";
import EducationContextProvider from "./contexts/EducationContext";


const App = () => {
  return (
    <div className="App">
      <ApolloProvider client={client}>
        <AuthContextProvider>
          <ProfileContextProvider>
            <ExperienceContextProvider>
              <EducationContextProvider>


                <Router>
                  <GQLTest />
                  <Navbar />
                  <Route exact path="/" component={Landing} />
                  <Route exact path="/register" component={Register} />
                  <Route exact path="/login" component={Login} />


                  <Route exact path="/dashboard" component={Dashboard} />
                  <Route exact path="/create-profile" component={CreateProfile} />
                  <Route exact path="/edit-profile" component={CreateProfile} />
                  <Route exact path="/add-experience" component={AddExperience} />
                  <Route exact path="/add-education" component={AddEducation} />
                  <Route exact path="/edit-experience/:exp_id" component={EditExperience} />
                  <Route exact path="/edit-education/:edu_id" component={EditEducation} />
                  {/* <Route exact path="/" component={Landing} />
          <div className="container">
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/profiles" component={Profiles} />
          <Route exact path="/profile/:handle" component={Profile} />
          <Switch>
          <PrivateRoute exact path="/dashboard" component={Dashboard} />
            </Switch>
            <Switch>
              <PrivateRoute
                exact
                path="/create-profile"
                component={CreateProfile}
                />
            </Switch>
            <Switch>
            <PrivateRoute
            exact
            path="/edit-profile"
            component={EditProfile}
            />
            </Switch>
            <Switch>
            <PrivateRoute
            exact
            path="/add-experience"
            component={AddExperience}
            />
            </Switch>
            <Switch>
            <PrivateRoute
            exact
            path="/edit-experience/:exp_id"
            component={EditExperience}
            />
            </Switch>
            <Switch>
            <PrivateRoute
            exact
            path="/add-education"
            component={AddEducation}
              />
              </Switch>
              <Switch>
              <PrivateRoute
              exact
              path="/edit-education/:edu_id"
              component={EditEducation}
              />
              </Switch>
              <Switch>
              <PrivateRoute exact path="/feed" component={Posts} />
              </Switch>
            <Switch>
            <PrivateRoute exact path="/post/:id" component={Post} />
            </Switch>
            <Route exact path="/not-found" component={NotFound} />
          </div> */}
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
