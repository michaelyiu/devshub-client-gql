import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { ApolloProvider } from "@apollo/react-hooks";
import client from "./apollo";

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

import "./App.css";


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

                  <Route exact path="/dashboard" component={Dashboard} />
                  <Route exact path="/create-profile" component={CreateProfile} />
                  <Route exact path="/edit-profile" component={CreateProfile} />
                  <Route exact path="/add-experience" component={AddExperience} />
                  <Route exact path="/add-education" component={AddEducation} />
                  <Route exact path="/edit-experience/:exp_id" component={EditExperience} />
                  <Route exact path="/edit-education/:edu_id" component={EditEducation} />
                  <PostContextProvider>
                    <Route exact path="/feed" component={Posts} />
                    <CommentContextProvider>
                      <Route exact path="/post/:id" component={Post} />
                    </CommentContextProvider>
                  </PostContextProvider>
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
