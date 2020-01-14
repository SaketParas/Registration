import React from 'react';
import SignUp from "./components/Signup"
import Login from "./components/Login"
import { Route, BrowserRouter } from "react-router-dom"
import DashBoard from "./components/dashboard";
import Post from "./components/Post";
import Comment from "./components/Comment";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route path="/dashboard" component={DashBoard} />
        <Route exact path="/" component={SignUp} />
        <Route path="/login" component={Login} />
        <Route path="/Post" component={Post} />
        <Route path="/Comment" component={Comment} />
      </BrowserRouter>
    </div>
  );
}

export default App;