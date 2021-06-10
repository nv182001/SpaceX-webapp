// import React from 'react'
// // import {
// //   BrowserRouter as Router,
// //   Switch,
// //   Route
// // } from "react-router-dom";
// // import Header from "./components/Header"
// // import Login from "./components/auth/Login"
// import Dashboard from "./components/Dashboard"
import Home from "./components/Home"
import "./components/css/App.css"

const App = () => {
  return (
    <div>
      {/* <Router>
        <Header></Header>
        <Switch>
          <Route path="/login">
            <Login/>
          </Route>
          <Route exact path="/">
            <Dashboard/>
          </Route>

        </Switch>
      </Router> */}
      <Home/>
    </div>
  )
}

export default App


